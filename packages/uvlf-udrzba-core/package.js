// App: Core (3rd layer)
//
// * This is where your modules are built into an application. The only package
// you should have to `meteor add` is  `metepor add app:core`. This package
// also acts as an umbrella by including alll your app's dependencies/code, and
// alko acts as a namespace manager.
//
// *  In each module, you should have exported a single global variable with
//    anything that we might neeed to access. Here in app:core, move these
//    exports into the 'App' global namespace.

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
    'lib/client/compatibility/bootstrap.js',
    'lib/client/stylesheets/base/global.less',
    'lib/client/layouts/_header.html',
    'lib/client/layouts/_footer.html',
    'lib/client/layouts/appLayout.html',
    'lib/client/layouts/loading.html',
    'lib/client/layouts/notFound.html',
    'lib/client/buttons.html',
    'lib/client/buttons.js',
  ], 'client');

  // Routing
  api.addFiles([
    'lib/router/config.js',
    'lib/router/router-plugin.js',
    'lib/router/meta.js'
  ], 'client');

  // server
  api.addFiles([
    'lib/server/email/templates/404.handlebars',
    'lib/server/email/templates/contactEmail.handlebars',
    'lib/server/email/config.js'
  ], 'server');

  // both
  api.addFiles([
    'lib/collections/schemas.js',
    'lib/collections/collections.js',
    'lib/collections/collection-helpers.js',
    'lib/collections/tabular-tables.js',
    'lib/both/accounts/config.js',
    'lib/both/controllers/app.js',
    'lib/both/controllers/dashboard.js',
    'lib/both/controllers/home.js',
    'lib/both/pracoviska.js',
    'lib/both/referaty.js',
    'lib/both/uvlf.js'
  ], ['client', 'server']);

  // public files
  api.addFiles([
    'public/fonts/font-awesome/FontAwesome.otf',
    'public/fonts/font-awesome/fontawesome-webfont.eot',
    'public/fonts/font-awesome/fontawesome-webfont.svg',
    'public/fonts/font-awesome/fontawesome-webfont.ttf',
    'public/fonts/font-awesome/fontawesome-webfont.woff',
    'public/fonts/font-awesome/fontawesome-webfont.woff2',
  ], 'client');


  // Last but not least.. (optional)
  api.export([
    'AppController',
    'pracoviska',
    'referaty',
    'uvlf',
    'SimpleSchema',
    'Pracovnici',
    'Ziadanky',
    'Nakupy',
    'TabularTables',
    'Schemas',
    'fa'
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
