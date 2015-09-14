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

  api.versionsFrom('1.1.0.3');

  var packages = [
    'meteor-platform',
    'jquery',
    'less',
    'handlebars',
    'reactive-var',
    'accounts-password',
    'useraccounts:bootstrap@1.12.3',
    'alanning:roles',
    'aldeed:collection2@2.5.0',
    'aldeed:autoform@5.5.0',
    'twbs:bootstrap@3.3.5',
    'themeteorchef:jquery-validation@1.14.0',
    'zimme:active-route@2.3.2',
    'arillo:flow-router-helpers@0.4.5',
    'kadira:flow-router@2.6.0',
    'kadira:blaze-layout@2.1.0',
    'themeteorchef:bert@1.1.0',
    'meteorhacks:subs-manager@1.6.2',
    'cmather:handlebars-server@0.2.0',
    'dburles:collection-helpers@1.0.3',
    'reywood:publish-composite@1.3.3',
    'momentjs:moment@2.10.6',
    'underscorestring:underscore.string@3.2.2',
    'matb33:collection-hooks@0.7.5',
    'dburles:factory@0.3.10',
    'anti:fake',
    'cunneen:mailgun',
    'useraccounts:flow-routing@1.12.3',
    'yasinuslu:blaze-meta@0.3.3',
    'fortawesome:fontawesome@4.4.0',
    'natestrauser:select2@4.0.0',
    'aldeed:autoform-select2',
    'numeral:numeral',
    'aldeed:tabular@1.4.0',
    'rajit:bootstrap3-datepicker',
    'rajit:bootstrap3-datepicker-sk',
    'meteorhacks:picker@1.0.3',
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
