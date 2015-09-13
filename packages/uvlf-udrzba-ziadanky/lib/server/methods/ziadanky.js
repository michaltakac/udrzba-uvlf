Meteor.methods({
  vlozitZiadanku: function(ziadanka) {
    check(ziadanka, {
      ziadatelId: String,
      miesto: String,
      sprava: String
    });

    var today = new Date();
    var year  = moment(today).format('YYYY');

    var ziadatel = Pracovnici.findOne(ziadanka.ziadatelId);

    var nova = {
      cislo: year + '/' + App.utils.pad(Ziadanky.find().fetch().length+1, 5),
      ziadatelId: ziadanka.ziadatelId,
      'ziadatelInfo_utvar': ziadatel.utvar,
      'ziadatelInfo_pracovisko': ziadatel.pracovisko,
      'ziadatelInfo_referat': ziadatel.referat,
      'ziadatelInfo_titulPred': ziadatel.titulPred,
      'ziadatelInfo_meno': ziadatel.meno,
      'ziadatelInfo_priezvisko': ziadatel.priezvisko,
      'ziadatelInfo_titulZa': ziadatel.titulZa,
      'ziadatelInfo_email': ziadatel.email,
      'ziadatelInfo_telefon': ziadatel.telefon,
      'ziadatelInfo_klapka':ziadatel.klapka,
      miesto: ziadanka.miesto,
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
