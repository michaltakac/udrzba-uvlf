Template.ziadankaEdit.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var ziadankaId = FlowRouter.getParam('_id')
    self.subscribe('ziadanka', ziadankaId);
  });
});

Template.ziadankaEdit.onRendered(function() {

});

Template.ziadankaEdit.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  }
});

Template.ziadankaEdit.events({
  'submit form': function(e) {
    e.preventDefault();
  }
});
