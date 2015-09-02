FlowRouter.route('/nakupy', {
  name: 'nakupy',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    console.log("Yeah! We are on the home page");
    BlazeLayout.render("appLayout", {area: "nakupy"});
  }
});

FlowRouter.route('/ziadanky/:_id/nakup', {
  name: 'pridatPoziadavkuNakup',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    console.log("Yeah! We are on the home page");
    BlazeLayout.render("appLayout", {area: "poziadavkaNakup"});
  }
});
