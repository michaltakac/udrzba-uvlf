/**
 * Core package
 *
 */
Package.describe({
  name: 'uvlf:udrzba-core',
  summary: 'Core application package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.3');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'uvlf:udrzba-lib', // no dependencies
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    'index.html',
    'lib/helpers/helpers-ui.js',
    'lib/helpers/stringHelpers.js',
    //'lib/client/compatibility/bootstrap.js',
    'lib/client/stylesheets/base/global.less',
    'lib/client/layouts/_header.html',
    'lib/client/layouts/_header.js',
    'lib/client/layouts/_footer.html',
    'lib/client/layouts/appLayout.html',
    'lib/client/layouts/loading.html',
    'lib/client/layouts/notFound.html',
  ], 'client');

  // Routing
  api.addFiles([
    'lib/router/config.js',
    'lib/router/router-plugin.js',
    'lib/router/meta.js',
    'lib/both/bert-config.js'
  ], 'client');

  // server
  api.addFiles([
    'lib/server/email/templates/404.handlebars',
    'lib/server/email/templates/contactEmail.handlebars',
    'lib/server/email/config.js',
    'lib/server/account-urls.js'
  ], 'server');

  // both
  api.addFiles([
    'lib/collections/schemas.js',
    'lib/collections/collections.js',
    'lib/collections/tabular-tables.js',
    'lib/both/accounts/config.js',
    'lib/both/pracoviska.js',
    'lib/both/referaty.js',
    'lib/both/uvlf.js'
  ], ['client', 'server']);

  // public files
  api.addFiles([

  ], 'client');


  // Last but not least.. (optional)
  api.export([
    'AccountsTemplates',
    'pracoviska',
    'referaty',
    'uvlf',
    'Collections',
    'SimpleSchema',
    'TabularTables',
    'Schemas',
    'Bert'
  ]);

});

Package.onTest(function (api) {
  api.use([
    'uvlf:udrzba-core',
    'sanjo:jasmine@0.18.0',
    'test-helpers',
    'templating',
    'reactive-dict'
  ], ['client']);

});
