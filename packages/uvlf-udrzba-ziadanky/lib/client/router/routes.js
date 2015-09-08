FlowRouter.route('/ziadanky', {
  name: 'ziadanky',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render("appLayout", {area: "ziadanky"});
  }
});

FlowRouter.route('/ziadanky/:_id', {
  name: 'ziadanka',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render("ziadankaTlac", {area: "ziadanka"});
  }
});

FlowRouter.route('/ziadanky/:_id/edit', {
  name: 'ziadankaEdit',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render("appLayout", {area: "ziadankaEdit"});
  }
});

FlowRouter.route('/pridat-poziadavku', {
  name: 'pridatPoziadavku',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render("appLayout", {area: "poziadavka"});
  }
});
