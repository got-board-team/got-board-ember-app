var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Any other options
  });

  app.import(app.bowerDirectory + "/d3/d3.js");
  app.import(app.bowerDirectory + "/draggabilly/dist/draggabilly.pkgd.min.js");

  // if (!isProduction) {
  //   app.import(app.bowerDirectory + "/sinon/lib/sinon.js", { type: "test" });
  // }
  app.hinting = false;

  return app.toTree();
};
