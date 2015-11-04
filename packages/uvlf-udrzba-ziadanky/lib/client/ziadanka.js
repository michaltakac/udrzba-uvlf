Template.ziadanka.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var ziadankaId = FlowRouter.getParam('_id');
    self.subscribe('ziadanka', ziadankaId);
    self.subscribe('vydajka', ziadankaId);
  });
});

Template.ziadanka.onRendered(function() {

});

Template.ziadanka.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  },
  vydajka: function() {
    return Vydajky.find().fetch().map(function(i, poradie) {
      return {
        _id: i._id,
        polozkaId: i.polozkaId,
        index: poradie + 1,
        kategoria: i.kategoria,
        nazovPolozky: i.nazovPolozky,
        jednotka: i.jednotka,
        pocet: i.pocet,
        cena: i.cena
      }
    });
  }
});
