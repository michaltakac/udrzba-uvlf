var subs = new SubsManager();

Template.poziadavkaNakup.onCreated(function () {
  subs.subscribe('nakupy');
  subs.subscribe('pracovnici');
  subs.subscribe('ziadanka', this.params._id);
  subs.subscribe('nakup', this.params._id);
});

Template.poziadavkaNakup.helpers({
  nakup: function() {
    var ziadankaId = Router.current().params._id;
    var nakup = Nakupy.findOne({"ziadankaId": ziadankaId});
    if (!nakup) {
      return false;
    } else {
      return nakup;
    }
  },
  pracovnici: function() {
    return Pracovnici.find().fetch();
  },
  ziadanky: function() {
    return Ziadanky.find().fetch();
  },
  ziadatelInfo: function() {
    var pracovnikId = Session.get('pracovnikId');
    if (!pracovnikId) {
      var nakup = Nakupy.findOne().ziadatelInfo[0];
      if (!nakup) {
        return false;
      } else {
        return nakup;
      }
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
Template.poziadavkaNakup.events({
  'click .start-nakup': function() {
    var ziadankaId = Router.current().params._id;
    Meteor.call('startNakup', ziadankaId, function(error) {
      if (error) {
        console.log(error)
      }
    });
  },
  'change [name="ziadatel"]': function(e) {
    Session.set('pracovnikId', $(e.currentTarget).val());
  }
});

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
