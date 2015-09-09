Template.ziadanka.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var ziadankaId = FlowRouter.getParam('_id');
    self.subscribe('ziadanka', ziadankaId);
  });
});

Template.ziadanka.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  },
  ziadatelInfo: function() {
    var ziadatel = Ziadanky.findOne().ziadatelInfo[0];
    return ziadatel;
  }
});
