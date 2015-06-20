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
  }
});
