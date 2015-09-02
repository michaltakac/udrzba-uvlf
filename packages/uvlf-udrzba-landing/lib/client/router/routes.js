FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
        console.log("Yeah! We are on the home page");
        BlazeLayout.render("appLayout", {area: "home"});
    }
});
