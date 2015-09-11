/**
 * Ziadanky package
 *
 */
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

  // Client files
  api.addFiles([
    'lib/client/status-ziadanka.html',
    'lib/client/status-ziadanka.js',
    'lib/client/table-ziadanka-tools.html',
    'lib/client/table-ziadanka-tools.js',
    'lib/client/ziadanka-settings.html',
    'lib/client/ziadanka-settings.js',
    'lib/client/ziadanky.html',
    'lib/client/ziadanky.js',
    'lib/client/ziadanka.html',
    'lib/client/ziadanka.js',
    'lib/client/ziadanka-edit.html',
    'lib/client/ziadanka-edit.js',
    'lib/client/poziadavka.html',
    'lib/client/poziadavka.js',
    'lib/client/layouts/ziadanka-tlac.html'
  ], "client");

  // both
  api.addFiles([
    'lib/collections/ziadanky-schema.js',
    'lib/collections/ziadanky-collection.js',
    'lib/collections/ziadanky-collection-helpers.js',
    'lib/collections/tabulartables-ziadanky.js'
  ], ['client', 'server']);

  // Server files
  api.addFiles([
    'lib/server/publications/ziadanky.js',
    'lib/server/permissions/ziadanky.js',
    'lib/server/methods/ziadanky.js'
  ], "server");

  // Routes
  api.addFiles([
    'lib/client/router/routes.js'
  ], "client");

  api.export([
    'Ziadanky'
  ]);
});


Package.onTest(function (api) {
  // api.use("tinytest");
  api.use("uvlf:udrzba-ziadanky");
});
