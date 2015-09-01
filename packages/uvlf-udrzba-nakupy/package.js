// App: Module (Layer 2)
//
// * Most of your app's code will be in the form of these modules. How you
//  decide to separate your modules will affect your workflow greatly so think
//  hard! Tip: your collections are usually good indicators of separation. If
//   you create one called 'app-collections' or 'app-views' you're doing it
//   wrong.
//
// * Each package should export a single gloval variable, unique to that module.
Package.describe({
  name: "uvlf:udrzba-nakupy", // Reference you'll use in other modules to add this one.
  summary: "Some info" ,
  version: "0.1.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  // Dependencies
  api.use([
    'uvlf:udrzba-lib',
    'uvlf:udrzba-core'
  ]);

  // Server files
  api.addFiles([
    'lib/server/publications/nakupy.js',
    'lib/server/permissions/nakupy.js',
    'lib/server/methods/nakupy.js'
  ], "server");

  // Shared files
  api.addFiles([
    
  ]);

  // Client files
  api.addFiles([
    'lib/client/nakupy.html',
    'lib/client/poziadavka-nakup.html',
    'lib/client/poziadavka-nakup.js',
    'lib/client/layouts/nakup-tlac.html'
  ], "client");

  // Routes
  api.addFiles([
    'lib/client/router/routes.js'
  ], "client");

});


Package.onTest(function (api) {
  api.use("tinytest");
  api.use("uvlf:udrzba-nakupy");
});
