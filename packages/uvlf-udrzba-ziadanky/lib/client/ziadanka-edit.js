/*
*  Controller: Editovať požiadavku
*  Template: /client/views/public/ziadanka-edit.html
*/

/*
* Helpers
*/
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
