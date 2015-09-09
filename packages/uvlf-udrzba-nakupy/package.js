/**
 * Nakupy
 *
 */
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

  // both
  api.addFiles([
    'lib/collections/nakupy-schema.js',
    'lib/collections/nakupy-collection.js',
    'lib/collections/nakupy-collection-helpers.js',
    'lib/collections/tabulartables-nakupy.js'
  ], ['client', 'server']);

  // Server files
  api.addFiles([
    'lib/server/publications/nakupy.js',
    'lib/server/permissions/nakupy.js',
    'lib/server/methods/nakupy.js'
  ], "server");

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

  api.export([
    'Nakupy'
  ]);
});


Package.onTest(function (api) {
  api.use("tinytest");
  api.use("uvlf:udrzba-nakupy");
});
