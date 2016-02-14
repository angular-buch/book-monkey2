/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new Angular2App(defaults);

  var myTree = new Funnel('./semantic', {
    srcDir: 'dist',
    destDir: 'vendor/semantic-ui/dist'
  });

  var appTree = app.toTree();

  return mergeTrees([myTree, appTree], { overwrite: true });
};
