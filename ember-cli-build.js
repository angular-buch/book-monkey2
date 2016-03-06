var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new Angular2App(defaults);

  var semanticUI = new Funnel('./node_modules', {
    srcDir: 'semantic-ui-css',
    destDir: 'vendor/semantic-ui/'
  });

  var appTree = app.toTree();

  return mergeTrees([semanticUI, appTree], { overwrite: true });
};
