Package.describe({
  name: 'uvlf:udrzba-app',
  version: '0.0.1',
  summary: 'UVLF maintenance umbrella package',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Admin panel
  api.imply([
    'uvlf:udrzba-admin'
  ], ['client', 'server']);

  api.imply([
    'uvlf:udrzba-lib',
    'uvlf:udrzba-core',
    'uvlf:udrzba-landing',
    'uvlf:udrzba-pracovnici',
    'uvlf:udrzba-ziadanky',
    'uvlf:udrzba-nakupy',
    'uvlf:udrzba-sklad',
    'uvlf:udrzba-generate-pdf',
    'uvlf:udrzba-activedirectory'
  ], ['client', 'server']);

});
