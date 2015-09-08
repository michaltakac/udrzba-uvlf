Meteor.methods({
  vlozitZiadanku: function(ziadanka) {
    check(ziadanka, {
      ziadatelId: String,
      miesto: String,
      sprava: String
    });

    var today = new Date();
    var year  = moment(today).format('YYYY');

    var nova = {
      cislo: year + '/' + App.utils.pad(Ziadanky.find().fetch().length+1, 5),
      ziadatel: ziadanka.ziadatelId,
      miesto: ziadanka.miesto,
      sprava: ziadanka.sprava,
      createdAt: moment( new Date() ).format("DD.MM.YYYY, HH:mm:ss")
    };

    Ziadanky.insert(nova);
  }
});
