var poziadavkaOpravaSubs = new SubsManager({
  // maximum number of cache subscriptions
  cacheLimit: 1,
  // any subscription will be expire after 5 minute, if it's not subscribed again
  expireIn: 1
});

Template.poziadavkaOprava.onCreated(function () {
  poziadavkaOpravaSubs.subscribe('pracovnici');
  poziadavkaOpravaSubs.subscribe('ziadanky');
});

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
    e.preventDefault();
    Session.set('pracovnikId', $(e.currentTarget).val());
  }
});

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
