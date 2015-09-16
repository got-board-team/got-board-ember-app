/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
var isProduction = EmberApp.env() === 'production';

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import(app.bowerDirectory + "/d3/d3.js");
app.import(app.bowerDirectory + "/draggabilly/dist/draggabilly.pkgd.min.js");

if (!isProduction) {
  app.import(app.bowerDirectory + "/sinon/lib/sinon.js", { type: "test" });
}
app.hinting = false;

module.exports = app.toTree();
