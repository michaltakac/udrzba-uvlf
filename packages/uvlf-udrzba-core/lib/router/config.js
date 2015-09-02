/*Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading'
});*/
FlowRouter.notfound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      BlazeLayout.render("notFound");
    }
};

// Router.plugin('loading', {loadingTemplate: 'loading'});
// Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
