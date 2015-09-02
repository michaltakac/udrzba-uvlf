var ziadankaSubs = new SubsManager();

Template.ziadanka.onCreated(function () {
  ziadankaSubs.subscribe('ziadanka', this.params._id);
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
