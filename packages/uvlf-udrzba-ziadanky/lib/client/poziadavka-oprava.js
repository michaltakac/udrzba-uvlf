/*
*  Controller: Pridať požiadavku - oprava
*  Template: /client/views/public/poziadavka-oprava.html
*/


/*
* Helpers
*/

Template.poziadavkaOprava.helpers({
  pracovnici: function() {
    return Pracovnici.find().fetch();
  },
  ziadanky: function() {
    return Ziadanky.find().fetch();
  },
  ziadatelInfo: function() {
    var pracovnikId = Session.get('pracovnikId');
    if (!pracovnikId) {
      return false;
    } else {
      return Pracovnici.findOne(pracovnikId);
    }
  },
  cislo: function() { 
    var today = new Date();
    var year = moment(today).format('YYYY');
    return year + ' / ' + pad(Ziadanky.find().fetch().length+1, 5);
  },
  datum: function() {
    var today = new Date()
    return moment(today).format("DD.MM.YYYY, HH:mm:ss");
  }
});

/*
* Events
*/

Template.poziadavkaOprava.events({
  'change [name="ziadatel"]': function(e) {
    Session.set('pracovnikId', $(e.currentTarget).val());
  }
});

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}