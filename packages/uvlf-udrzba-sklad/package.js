/**
 * Sklad
 *
 */
Package.describe({
  name: "uvlf:udrzba-sklad", // Reference you'll use in other modules to add this one.
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

  // both
  api.addFiles([
    'lib/collections/sklad-schema.js',
    'lib/collections/sklad-collection.js',
    'lib/collections/sklad-collection-helpers.js',
    'lib/collections/tabulartables-sklad.js'
  ], ['client', 'server']);

  // Server files
  api.addFiles([
    'lib/server/publications/sklad.js',
    'lib/server/permissions/sklad.js',
    'lib/server/methods/sklad.js'
  ], "server");

  // Client files
  api.addFiles([
    'lib/client/sklad.html'
  ], "client");

  // Routes
  api.addFiles([
    'lib/client/router/routes.js'
  ], "client");

  api.export([
    'Sklad'
  ]);
});


Package.onTest(function (api) {
  api.use("tinytest");
  api.use("uvlf:udrzba-sklad");
});
