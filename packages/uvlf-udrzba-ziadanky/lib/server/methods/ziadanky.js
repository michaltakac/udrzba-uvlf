Meteor.methods({
  vlozitZiadanku: function(ziadanka) {
    check(ziadanka, {
      ziadatelId: String,
      miesto: String,
      predmet: String,
      sprava: String
    });

    var today = new Date();
    var year  = moment(today).format('YYYY');

    var ziadatel = Meteor.users.findOne(ziadanka.ziadatelId);

    var nova = {
      cislo: year + '/' + App.utils.pad(Ziadanky.find().fetch().length+1, 5),
      ziadatelId: ziadanka.ziadatelId,
      'ziadatelInfo_utvar': ziadatel.profile.utvar,
      'ziadatelInfo_pracovisko': ziadatel.profile.pracovisko,
      'ziadatelInfo_referat': ziadatel.profile.referat,
      'ziadatelInfo_titulPred': ziadatel.profile.titulPred,
      'ziadatelInfo_meno': ziadatel.profile.meno,
      'ziadatelInfo_priezvisko': ziadatel.profile.priezvisko,
      'ziadatelInfo_titulZa': ziadatel.profile.titulZa,
      'ziadatelInfo_email': ziadatel.emails[0].address,
      'ziadatelInfo_telefon': ziadatel.profile.telefon,
      'ziadatelInfo_klapka':ziadatel.profile.klapka,
      miesto: ziadanka.miesto,
      predmet: ziadanka.predmet,
      sprava: ziadanka.sprava,
      nakupId: ""
    };

    Ziadanky.insert(nova);
  },
  ulozitZiadanku: function(inputs, id) {
    check(inputs, {
      zacatiePrac:   String,
      ukonceniePrac: String,
      priorita:      String,
      pridelenyPracovnik: Array,
      supisDodavok: Array
    });

    Ziadanky.update(id, {
      $set: inputs
    });
  }
});
