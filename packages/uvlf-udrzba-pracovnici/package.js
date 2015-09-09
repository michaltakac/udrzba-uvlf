/**
 * Pracovnici
 *
 */
Package.describe({
  name: "uvlf:udrzba-pracovnici", // Reference you'll use in other modules to add this one.
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
    'lib/collections/pracovnici-schema.js',
    'lib/collections/pracovnici-collection.js',
    'lib/collections/pracovnici-collection-helpers.js'
  ], ['client', 'server']);

  // Server files
  api.addFiles([
    'lib/server/publications/pracovnici.js',
    'lib/server/permissions/pracovnici.js',
    'lib/server/methods/pracovnici.js'
  ], "server");

  // Client files
  api.addFiles([

  ], "client");

  api.export([
    'Pracovnici'
  ])
});


Package.onTest(function (api) {
  // api.use("tinytest");
  api.use("uvlf:udrzba-pracovnici");
});
