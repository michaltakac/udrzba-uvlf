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

  api.versionsFrom('1.2.1');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'uvlf:udrzba-lib', // no dependencies
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // Bootstrap Mixins ------------------------------------------------------
  api.addFiles([
    // Utilities
    'lib/client/stylesheets/base/lib/bootstrap/mixins/hide-text.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/opacity.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/image.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/labels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/reset-filter.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/resize.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/responsive-visibility.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/size.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/tab-focus.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/text-emphasis.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/text-overflow.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/vendor-prefixes.import.less',

    // Components
    'lib/client/stylesheets/base/lib/bootstrap/mixins/alerts.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/buttons.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/panels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/pagination.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/list-group.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/nav-divider.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/forms.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/progress-bar.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/table-row.import.less',

    // Skins
    'lib/client/stylesheets/base/lib/bootstrap/mixins/background-variant.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/border-radius.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/gradients.import.less',

    // Layout
    'lib/client/stylesheets/base/lib/bootstrap/mixins/clearfix.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/center-block.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/nav-vertical-align.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/grid-framework.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/grid.import.less'
  ], 'client');

  // Bootstrap ------------------------------------------------------
  api.addFiles([
    // Core variables and mixins
    'lib/client/stylesheets/base/lib/bootstrap/variables.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins.import.less',

    // Reset and dependencies
    'lib/client/stylesheets/base/lib/bootstrap/normalize.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/print.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/glyphicons.import.less',

    // Core CSS
    'lib/client/stylesheets/base/lib/bootstrap/scaffolding.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/type.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/code.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/grid.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/tables.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/forms.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/buttons.import.less',

    // Components
    'lib/client/stylesheets/base/lib/bootstrap/component-animations.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/dropdowns.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/button-groups.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/input-groups.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/navs.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/navbar.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/breadcrumbs.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/pagination.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/pager.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/labels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/badges.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/jumbotron.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/thumbnails.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/alerts.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/progress-bars.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/media.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/list-group.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/panels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/responsive-embed.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/wells.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/close.import.less',

    // Components w/ JavaScript
    'lib/client/stylesheets/base/lib/bootstrap/modals.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/tooltip.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/popovers.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/carousel.import.less',

    // Utility classes
    'lib/client/stylesheets/base/lib/bootstrap/utilities.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/responsive-utilities.import.less',

    'lib/client/stylesheets/base/lib/bootstrap/bootstrap.import.less',
  ], 'client');

  // styles
  api.addFiles([
    'lib/client/stylesheets/components/buttons.import.less',
    'lib/client/stylesheets/components/loading.import.less',
    'lib/client/stylesheets/base/mixins.import.less',
    'lib/client/stylesheets/base/type.import.less',
    'lib/client/stylesheets/base/variables.import.less',
    'lib/client/stylesheets/base/global.less',
  ]);

  // client
  api.addFiles([
    'index.html',
    'lib/helpers/helpers-ui.js',
    'lib/helpers/stringHelpers.js',
    //'lib/client/compatibility/bootstrap.js',
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
    'lib/server/account-urls.js',
    'lib/server/seed-accounts.js'
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
