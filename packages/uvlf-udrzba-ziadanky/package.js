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
  name: "uvlf:udrzba-ziadanky", // Reference you'll use in other modules to add this one.
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

  // Shared files
  api.addFiles([
    
  ], ['client', 'server']);

  // Server files
  api.addFiles([
    'lib/server/publications/ziadanky.js',
    'lib/server/permissions/ziadanky.js',
    'lib/server/methods/ziadanky.js',
  ], "server");

  // Client files
  api.addFiles([
    'lib/autoform-hooks.js',
    'lib/client/ziadanky.html',
    'lib/client/ziadanka.html',
    'lib/client/ziadanka.js',
    'lib/client/ziadanka-edit.html',
    'lib/client/ziadanka-edit.js',
    'lib/client/poziadavka-oprava.html',
    'lib/client/poziadavka-oprava.js',
  ], "client");

  // Routes
  api.addFiles([
    'lib/client/router/routes.js'
  ], "client");
});


Package.onTest(function (api) {
  // api.use("tinytest");
  api.use("uvlf:udrzba-ziadanky");
});
