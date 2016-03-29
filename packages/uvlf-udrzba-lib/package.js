/**
 * Udzrba - lib package
 *
 */
Package.describe({
  name: 'uvlf:udrzba-lib', // All modules should api.use() this.
  summary: 'Application core library.',
  version: '1.0.0',
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  var packages = [
    'meteor-platform',
    'jquery',
    'less',
    'handlebars',
    'reactive-var',
    'accounts-password',
    'useraccounts:bootstrap',
    'alanning:roles',
    'aldeed:collection2',
    'aldeed:autoform@5.5.0',
    'twbs:bootstrap',
    'themeteorchef:jquery-validation',
    'zimme:active-route',
    'arillo:flow-router-helpers',
    'kadira:flow-router',
    'kadira:blaze-layout',
    'themeteorchef:bert',
    'meteorhacks:subs-manager',
    'cmather:handlebars-server@0.2.0',
    'dburles:collection-helpers',
    'reywood:publish-composite',
    'momentjs:moment',
    'underscorestring:underscore.string',
    'matb33:collection-hooks',
    'dburles:factory',
    'anti:fake',
    'cunneen:mailgun',
    'useraccounts:flow-routing',
    'yasinuslu:blaze-meta',
    'fortawesome:fontawesome',
    'natestrauser:select2',
    'aldeed:autoform-select2',
    'numeral:numeral',
    'aldeed:tabular@1.4.2',
    'rajit:bootstrap3-datepicker',
    'rajit:bootstrap3-datepicker-sk',
    'meteorhacks:picker',
    'chhib:selectize-bootstrap-3'
  ];

  api.use(packages);

  // Makes packages available in global context. If for some reason you don't
  // want that, just make 2 separate arrays above and don't imply one of them.
  // However, this is better done in app-core which still lets you manage
  // the namespaces of packages in the same way, but will still give your
  // modules access to them via global namespace.
  api.imply(packages);

  // Trick to set envrionment-specific packages. I personally use `direnv` to
  // automatically set the right environment vars for my meteor apps.
  if (process.env.IS_PRODUCTION) {
    api.use('xolvio:inspectlet');
    api.export('__insp');
  }


  // And now.. your files! I recommend you declare namespaces in your very first
  // file.
  api.addFiles([
    'lib/core.js' //,
    // 'lib/app.utils.js'
  ], ['client', 'server']);


  api.export([
    'App',
    'Secondary',
    '_',
    'Meteor',
    'Template',
    'Blaze',
    'FlowRouter',
    'BlazeLayout',
    'AutoForm',
    'select2',
    'Roles',
    'AutoForm',
    'Bert'
  ]);
});
