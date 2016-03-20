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
  name: "uvlf:udrzba-landing", // Reference you'll use in other modules to add this one.
  summary: "Some info" ,
  version: "0.1.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Dependencies
  api.use([
    'uvlf:udrzba-lib',
    'uvlf:udrzba-core'
  ]);

  // Server files
  api.addFiles([

  ], "server");

  // Shared files
  api.addFiles([

  ]);

  // Client files
  api.addFiles([
    'lib/client/home.html',
    'lib/client/home.js'
  ], "client");

  // Routes
  api.addFiles([
    'lib/client/router/routes.js'
  ], "client");
});


Package.onTest(function (api) {
  api.use("sanjo:jasmine@0.18.0");
  api.addFiles('tests/client/landing-spec.js', 'client');
});
