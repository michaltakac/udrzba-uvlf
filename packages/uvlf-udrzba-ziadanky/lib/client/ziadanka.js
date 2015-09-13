Template.ziadanka.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var ziadankaId = FlowRouter.getParam('_id');
    self.subscribe('ziadanka', ziadankaId);
  });
});

Template.ziadanka.onRendered(function() {

});

Template.ziadanka.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  }
});
