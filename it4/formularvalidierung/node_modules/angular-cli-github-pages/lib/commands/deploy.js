'use strict';

var exec = require('child_process').exec;
var RSVP = require('rsvp');
var https = require('https');
var inquire = require('inquirer');
var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');


module.exports = {
  name: 'github-pages:deploy',
  aliases: ['gh-pages:deploy'],
  description: 'Build the test app for production, commit it into a git branch, setup GitHub repo and push to it',
  works: 'insideProject',

  availableOptions: [{
    name:         'message',
    type:         String,
    default:      'new gh-pages version',
    description:  'The commit message to include with the build, must be wrapped in quotes.'
  }, {
    name:         'environment',
    type:         String,
    default:      'production',
    description:  'The Angular environment to create a build for'
  }, {
    name:         'branch',
    type:         String,
    default:      'gh-pages',
    description:  'The git branch to push your pages to'
  }],

  run: function(options, rawArgs) {
    var ui          = this.ui;
    var root        = this.project.root;
    var execOptions = { cwd: root };
    var projectName = this.project.pkg.name;
    var projectUrl  = '';
    var fsReadDir = RSVP.denodeify(fs.readdir);
    var fsCopy = RSVP.denodeify(fse.copy);

    function buildApp() {
      var env = options.environment;
      return runCommand('ng build --environment=' + env, execOptions);
    }

    function checkForPendingChanges() {
      return runCommand('git status --porcelain', execOptions).then(stdout => {
        if (/\w+/m.test(stdout)) {
          return RSVP.reject('Uncommitted file changes found! Please commit all changes before deploying.');
        }
      });
    }

    function checkoutGhPages() {
      return runCommand('git checkout ' + options.branch, execOptions);
    }

    function copy() {
      return fsReadDir('dist').then(
              (files) => RSVP.all(files.map((file) => fsCopy(path.join('dist', file), path.join('.', file)))));
    }

    function addAndCommit() {
      return runCommand('git add favicon.ico index.html app* vendor', execOptions).
          then(runCommandLater('git commit -m "' + options.message + '"', execOptions)).
          then(function() { return true; }, function() { return false; });
    }

    function createGitHubRepoIfNeeded() {
      return runCommand('git remote -v').
      then(function(stdout) {

        if (!/origin\s+git@github\.com/m.test(stdout)) {
          ui.write("In order to deploy this project via GitHub Pages, we must first create a repository for it...\n");

          return new RSVP.Promise(function(resolve, reject) {
            inquire.prompt([{
              name: 'ghUserName',
              type: 'input',
              message: 'Please enter your GitHub user name:',
              validate: function(userName) { return /\w+/.test(userName); }
            }, {
              name: 'ghPassword',
              type: 'password',
              message: 'and your GitHub password (used only once to create the repo):',
              validate: function(password) { return /.+/.test(password); }
            }], function(answers) {

              projectUrl = `https://${answers.ghUserName.toLowerCase()}.github.io/${projectName}/`;

              var postData = JSON.stringify({
                'name' : projectName
              });

              var req = https.request({
                hostname: 'api.github.com',
                port: 443,
                path: '/user/repos',
                method: 'POST',
                auth: answers.ghUserName + ':' + answers.ghPassword,
                headers: {
                  'Content-Type': 'application/json',
                  'Content-Length': postData.length,
                  'User-Agent': 'angular-cli-github-pages'
                }
              });

              req.on('response', function(response) {
                if (response.statusCode === 201) {
                  resolve(
                      runCommand(`git remote add origin git@github.com:${answers.ghUserName}/${projectName}.git`).
                        then(runCommandLater("git checkout --orphan gh-pages")).
                        then(runCommandLater("git rm --cached -r . ")).
                        then(runCommandLater("git add .gitignore")).
                        then(runCommandLater("git clean -f -d")).
                        then(runCommandLater("git commit -m \"initial gh-pages commit\"")).
                        then(runCommandLater("git checkout master"))
                  )
                } else {
                  reject(`Failed to create GitHub repo. Error: ${response.statusCode} ${response.statusMessage}`);
                }
              });

              req.write(postData);
              req.end();
            });
          });
        } else {
          var userName = stdout.match(/origin\s+git@github\.com\:([^\/]+)/m)[1].toLowerCase();
          projectUrl = `https://${userName}.github.io/${projectName}/`;
        }
      });
    }

    function pushToGitRepo(committed) {
      if (committed) {
        return runCommand("git push origin gh-pages", execOptions).then(function() { return committed; });
      }
      return committed;
    }

    function returnToPreviousCheckout(committed) {
      return runCommand("git checkout -", execOptions).then(function() { return committed; });
    }



    return buildApp().
      then(checkForPendingChanges).
      then(createGitHubRepoIfNeeded).
      then(checkoutGhPages).
      then(copy).
      then(addAndCommit).
      then(returnToPreviousCheckout).
      then(pushToGitRepo).
      then(function(committed) {
        //var branch = options.branch;
        if (committed) {
          ui.write(`Deployed! Visit ${projectUrl}\n`);
        } else {
          ui.write('No changes found. Deployment skipped.\n');
        }
      });
  }
};

function runCommandLater() {
  var args = arguments;
  return function() {
    return runCommand.apply(null, args);
  }
}

function runCommand(/* child_process.exec args */) {
  var args = Array.prototype.slice.call(arguments);

  var lastIndex = args.length - 1;
  var lastArg   = args[lastIndex];
  var logOutput = false;
  if (typeof lastArg === 'boolean') {
    logOutput = lastArg;
    args.splice(lastIndex);
  }

  return new RSVP.Promise(function(resolve, reject) {
    var cb = function(err, stdout, stderr) {
      if (stderr) {
        console.log(stderr);
      }

      if (logOutput && stdout) {
        console.log(stdout);
      }

      if (err) {
        return reject(err);
      }

      return resolve(stdout);
    };

    args.push(cb);
    exec.apply(exec, args);
  }.bind(this));
}
