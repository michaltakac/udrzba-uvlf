/*
*  Controller: Žiadanka
*  Template: /client/views/public/ziadanka.html
*/

/*
* Helpers
*/
Template.ziadanka.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  },
  ziadatelInfo: function() {
    var ziadatel = Ziadanky.findOne().ziadatelInfo[0];
    return ziadatel;
  }
});
