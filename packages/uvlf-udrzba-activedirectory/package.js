/**
 * Udzrba - Active Directory
 *
 */
Package.describe({
  name: 'uvlf:udrzba-activedirectory', // All modules should api.use() this.
  summary: 'Active Directory NPM library wrapper.',
  version: '1.0.0',
});

Npm.depends({
  "activedirectory": "0.7.2"
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.addFiles([
    'lib/settings.js' //,
    // 'lib/app.utils.js'
  ], ['server']);

});
