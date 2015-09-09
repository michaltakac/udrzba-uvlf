Template.ziadankaEdit.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var ziadankaId = FlowRouter.getParam('_id')
    self.subscribe('ziadanka', ziadankaId);
  });
});

Template.ziadankaEdit.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  },
  ziadatelInfo: function() {
    var ziadatel = Ziadanky.findOne().ziadatelInfo[0];
    return ziadatel;
  },
  zacatiePrac: function() {
  	var cas = Ziadanky.findOne().zacatiePrac;
	return moment(cas).format('DD.MM.YYYY');
  },
  ukonceniePrac: function() {
  	var cas = Ziadanky.findOne().ukonceniePrac;
	return moment(cas).format('DD.MM.YYYY');
  }
});

Template.ziadankaEdit.events({
  'submit form': function(e) {
    e.preventDefault();
  }
});
