/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'semantic-ui-css/semantic.css',
      'semantic-ui-css/themes/**/*'      
    ]
  });
  return app.toTree();
};
