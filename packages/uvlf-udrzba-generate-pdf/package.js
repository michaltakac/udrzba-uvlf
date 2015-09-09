/**
 * Generate PDF
 *
 */
Package.describe({
  name: "uvlf:udrzba-generate-pdf", // Reference you'll use in other modules to add this one.
  summary: "Some info" ,
  version: "0.1.0",
  git: ""
});

Npm.depends({
  "webshot": "0.16.0"
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
    'lib/server/generate-pdf.js'
  ], "server");
});


Package.onTest(function (api) {
  // api.use("tinytest");
  api.use("uvlf:udrzba-generate-pdf");
});
