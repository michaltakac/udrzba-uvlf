Package.describe({
  name: 'uvlf:udrzba-app',
  version: '0.0.1',
  summary: 'UVLF maintenance umbrella package',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.imply([
    'uvlf:udrzba-lib',
    'uvlf:udrzba-core',
    'uvlf:udrzba-admin',
    'uvlf:udrzba-landing',
    'uvlf:udrzba-pracovnici',
    'uvlf:udrzba-ziadanky',
    'uvlf:udrzba-nakupy'
  ], ['client', 'server']);

});