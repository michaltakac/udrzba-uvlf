function filterPracovnikov(utvar) {
  var pracovnici = Pracovnici.find({utvar: utvar}).fetch();
  return pracovnici.map(function(ref) {
    var titulPred = "";
    var titulZa = "";
    if (ref.titulPred) {
      titulPred = ref.titulPred;
    }
    if (ref.titulZa) {
      titulZa = ', '+ref.titulZa;
    }
    return {
      label: titulPred + ' ' + ref.meno + ' ' + ref.priezvisko + titulZa,
      value: ref._id
    };
  });
}
SimpleSchema.debug = true;

Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

Schemas.Pracovnici = new SimpleSchema({
  utvar: {
    type: String,
    autoform: {
      type: "select2",
      options: function() {
        return uvlf.map(function(utvar) {
          return {
            label: utvar.nazov,
            value: utvar.nazov
          };
        });
      }
    }
  },
  pracovisko: {
    type: String,
    autoform: {
      type: "select2",
      options: function() {
        return pracoviska.map(function(pracovisko) {
          return {
            label: pracovisko.nazov,
            value: pracovisko.nazov
          };
        });
      }
    }
  },
  referat: {
    type: String,
    autoform: {
      type: "select2",
      options: function() {
        return referaty.map(function(referat) {
          return {
            label: referat.nazov,
            value: referat.nazov
          };
        });
      }
    }
  },
  titulPred: {
    type: String,
    max: 20,
    optional: true
  },
  meno: {
    type: String
  },
  priezvisko: {
    type: String
  },
  titulZa: {
    type: String,
    max: 20,
    optional: true
  },
  email: {
    type: SimpleSchema.RegEx.Email,
    optional: true
  },
  telefon: {
    type: String,
    optional: true
  },
  klapka: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});

Schemas.Ziadanky = new SimpleSchema({
  cislo: {
    type: String
  },
  ziadatelId: {
    type: String,
    label: 'Žiadateľ',
    optional: true,
    autoform: {
      type: "select2",
      options: function () {
        return [
          {
            optgroup: "Útvar rektora",
            options: filterPracovnikov("Útvar rektora")
          },
          {
            optgroup: "Útvar kvestora/ky",
            options: filterPracovnikov("Útvar kvestora/ky")
          },
          {
            optgroup: "Útvar prorektora/ky",
            options: filterPracovnikov("Útvar prorektora/ky")
          },
          {
            optgroup: "Katedra anatómie, histológie a fyziológie",
            options: filterPracovnikov("Katedra anatómie, histológie a fyziológie")
          },
          {
            optgroup: "Katedra biológie a genetiky",
            options: filterPracovnikov("Katedra biológie a genetiky")
          },
          {
            optgroup: "Katedra chémie, biochémie a biofyziky",
            options: filterPracovnikov("Katedra chémie, biochémie a biofyziky")
          },
          {
            optgroup: "Katedra epizootológie a parazitológie",
            options: filterPracovnikov("Katedra epizootológie a parazitológie")
          },
          {
            optgroup: "Katedra farmaceutickej technológie",
            options: filterPracovnikov("Katedra farmaceutickej technológie")
          },
          {
            optgroup: "Katedra lekárenstva a sociálnej farmácie",
            options: filterPracovnikov("Katedra lekárenstva a sociálnej farmácie")
          },
          {
            optgroup: "Katedra farmakognózie a botaniky",
            options: filterPracovnikov("Katedra farmakognózie a botaniky")
          },
          {
            optgroup: "Katedra farmakológie a toxikológie",
            options: filterPracovnikov("Katedra farmakológie a toxikológie")
          },
          {
            optgroup: "Katedra hygieny a technológie potravín",
            options: filterPracovnikov("Katedra hygieny a technológie potravín")
          },
          {
            optgroup: "Katedra mikrobiológie a imunológie",
            options: filterPracovnikov("Katedra mikrobiológie a imunológie")
          },
          {
            optgroup: "Katedra patologickej anatómie a patologickej fyziológie",
            options: filterPracovnikov("Katedra patologickej anatómie a patologickej fyziológie")
          },
          {
            optgroup: "Katedra všeobecne vzdelávacích predmetov",
            options: filterPracovnikov("Katedra všeobecne vzdelávacích predmetov")
          },
          {
            optgroup: "Katedra výživy, dietetiky a chovu zvierat",
            options: filterPracovnikov("Katedra výživy, dietetiky a chovu zvierat")
          },
          {
            optgroup: "Katedra životného prostredia, veterinárskej legislatívy a ekonomiky",
            options: filterPracovnikov("Katedra životného prostredia, veterinárskej legislatívy a ekonomiky")
          },
          {
            optgroup: "Klinika malých zvierat",
            options: filterPracovnikov("Klinika malých zvierat")
          },
          {
            optgroup: "Klinika ošípaných",
            options: filterPracovnikov("Klinika ošípaných")
          },
          {
            optgroup: "Klinika prežúvavcov",
            options: filterPracovnikov("Klinika prežúvavcov")
          },
          {
            optgroup: "Klinika vtákov, exotických a voľne žijúcich zvierat",
            options: filterPracovnikov("Klinika vtákov, exotických a voľne žijúcich zvierat")
          },
          {
            optgroup: "Ústav vedeckých informácií a knižnica",
            options: filterPracovnikov("Ústav vedeckých informácií a knižnica")
          },
          {
            optgroup: "Univerzitná lekáreň",
            options: filterPracovnikov("Univerzitná lekáreň")
          },
          {
            optgroup: "Účelové zariadenie pre chov a choroby zveri, rýb a včiel v Rozanovciach",
            options: filterPracovnikov("Účelové zariadenie pre chov a choroby zveri, rýb a včiel v Rozanovciach")
          },
          {
            optgroup: "Jazdecký areál",
            options: filterPracovnikov("Jazdecký areál")
          },
          {
            optgroup: "Študentské domovy",
            options: filterPracovnikov("Študentské domovy")
          },
          {
            optgroup: "Edičné stredisko a predajňa literatúry",
            options: filterPracovnikov("Edičné stredisko a predajňa literatúry")
          },
          {
            optgroup: "TJ Slávia UVLF",
            options: filterPracovnikov("TJ Slávia UVLF")
          }
        ];
      }
    }
  },
  'ziadatelInfo_utvar': {
    type: String
  },
  'ziadatelInfo_pracovisko': {
    type: String
  },
  'ziadatelInfo_referat': {
    type: String
  },
  'ziadatelInfo_titulPred': {
    type: String,
    max: 20,
    optional: true
  },
  'ziadatelInfo_meno': {
    type: String
  },
  'ziadatelInfo_priezvisko': {
    type: String
  },
  'ziadatelInfo_titulZa': {
    type: String,
    max: 20,
    optional: true
  },
  'ziadatelInfo_email': {
    type: SimpleSchema.RegEx.Email
  },
  'ziadatelInfo_telefon': {
    type: String,
    optional: true
  },
  'ziadatelInfo_klapka': {
    type: String,
    optional: true
  },
  sprava: {
    type: String,
    label: 'Predmet požiadavky',
    autoform: {
      rows: 8
    }
  },
  miesto: {
    type: String,
    label: 'Miesto'
  },
  zacatiePrac: {
    type: String,
    label: 'Termín začatia prác',
    optional: true
  },
  ukonceniePrac: {
    type: String,
    label: 'Termín ukončenia prác',
    optional: true
  },
  supisDodavok: {
    type: String,
    label: 'Súpis dodávok',
    optional: true,
    autoform: {
      rows: 6
    }
  },
  priorita: {
    type: String,
    label: 'Priorita',
    optional: true,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Vysoká", value: "Vysoká"},
          {label: "Havarijná", value: "Havarijná"},
          {label: "Nízka", value: "Nízka"},
          {label: "Bežná", value: "Bežná"}
        ];
      }
    }
  },
  pridelenyPracovnik: {
    type: String,
    label: 'Práce vykonal / pridelené',
    optional: true
  },
  status: {
    type: String,
    label: 'Vybavené?',
    optional: true
  },
  nakupId: {
    type: String,
    label: 'Nákup',
    optional: true
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});

Schemas.Nakupy = new SimpleSchema({
  cisloZiadanky: {
    type: String
  },
  ziadankaId: {
    type: String
  },
  typ: {
    type: String,
    optional: true
  },
  ziadatel: {
    type: String,
    label: 'Žiadateľ',
    autoform: {
      type: "select2",
      options: function () {
        return [
          {
            optgroup: "Útvar rektora",
            options: filterPracovnikov("Útvar rektora")
          },
          {
            optgroup: "Útvar kvestora/ky",
            options: filterPracovnikov("Útvar kvestora/ky")
          },
          {
            optgroup: "Útvar prorektora/ky",
            options: filterPracovnikov("Útvar prorektora/ky")
          },
          {
            optgroup: "Katedra anatómie, histológie a fyziológie",
            options: filterPracovnikov("Katedra anatómie, histológie a fyziológie")
          },
          {
            optgroup: "Katedra biológie a genetiky",
            options: filterPracovnikov("Katedra biológie a genetiky")
          },
          {
            optgroup: "Katedra chémie, biochémie a biofyziky",
            options: filterPracovnikov("Katedra chémie, biochémie a biofyziky")
          },
          {
            optgroup: "Katedra epizootológie a parazitológie",
            options: filterPracovnikov("Katedra epizootológie a parazitológie")
          },
          {
            optgroup: "Katedra farmaceutickej technológie",
            options: filterPracovnikov("Katedra farmaceutickej technológie")
          },
          {
            optgroup: "Katedra lekárenstva a sociálnej farmácie",
            options: filterPracovnikov("Katedra lekárenstva a sociálnej farmácie")
          },
          {
            optgroup: "Katedra farmakognózie a botaniky",
            options: filterPracovnikov("Katedra farmakognózie a botaniky")
          },
          {
            optgroup: "Katedra farmakológie a toxikológie",
            options: filterPracovnikov("Katedra farmakológie a toxikológie")
          },
          {
            optgroup: "Katedra hygieny a technológie potravín",
            options: filterPracovnikov("Katedra hygieny a technológie potravín")
          },
          {
            optgroup: "Katedra mikrobiológie a imunológie",
            options: filterPracovnikov("Katedra mikrobiológie a imunológie")
          },
          {
            optgroup: "Katedra patologickej anatómie a patologickej fyziológie",
            options: filterPracovnikov("Katedra patologickej anatómie a patologickej fyziológie")
          },
          {
            optgroup: "Katedra všeobecne vzdelávacích predmetov",
            options: filterPracovnikov("Katedra všeobecne vzdelávacích predmetov")
          },
          {
            optgroup: "Katedra výživy, dietetiky a chovu zvierat",
            options: filterPracovnikov("Katedra výživy, dietetiky a chovu zvierat")
          },
          {
            optgroup: "Katedra životného prostredia, veterinárskej legislatívy a ekonomiky",
            options: filterPracovnikov("Katedra životného prostredia, veterinárskej legislatívy a ekonomiky")
          },
          {
            optgroup: "Klinika malých zvierat",
            options: filterPracovnikov("Klinika malých zvierat")
          },
          {
            optgroup: "Klinika ošípaných",
            options: filterPracovnikov("Klinika ošípaných")
          },
          {
            optgroup: "Klinika prežúvavcov",
            options: filterPracovnikov("Klinika prežúvavcov")
          },
          {
            optgroup: "Klinika vtákov, exotických a voľne žijúcich zvierat",
            options: filterPracovnikov("Klinika vtákov, exotických a voľne žijúcich zvierat")
          },
          {
            optgroup: "Ústav vedeckých informácií a knižnica",
            options: filterPracovnikov("Ústav vedeckých informácií a knižnica")
          },
          {
            optgroup: "Univerzitná lekáreň",
            options: filterPracovnikov("Univerzitná lekáreň")
          },
          {
            optgroup: "Účelové zariadenie pre chov a choroby zveri, rýb a včiel v Rozanovciach",
            options: filterPracovnikov("Účelové zariadenie pre chov a choroby zveri, rýb a včiel v Rozanovciach")
          },
          {
            optgroup: "Jazdecký areál",
            options: filterPracovnikov("Jazdecký areál")
          },
          {
            optgroup: "Študentské domovy",
            options: filterPracovnikov("Študentské domovy")
          },
          {
            optgroup: "Edičné stredisko a predajňa literatúry",
            options: filterPracovnikov("Edičné stredisko a predajňa literatúry")
          },
          {
            optgroup: "TJ Slávia UVLF",
            options: filterPracovnikov("TJ Slávia UVLF")
          }
        ];
      }
    },
    optional: true
  },
  'ziadatelInfo_utvar': {
    type: String,
    optional: true
  },
  'ziadatelInfo_pracovisko': {
    type: String,
    optional: true
  },
  'ziadatelInfo_referat': {
    type: String,
    optional: true
  },
  'ziadatelInfo_titulPred': {
    type: String,
    max: 20,
    optional: true
  },
  'ziadatelInfo_meno': {
    type: String,
    optional: true
  },
  'ziadatelInfo_priezvisko': {
    type: String,
    optional: true
  },
  'ziadatelInfo_titulZa': {
    type: String,
    max: 20,
    optional: true
  },
  'ziadatelInfo_email': {
    type: SimpleSchema.RegEx.Email,
    optional: true
  },
  'ziadatelInfo_telefon': {
    type: String,
    optional: true
  },
  'ziadatelInfo_klapka': {
    type: String,
    optional: true
  },
  sprava: {
    type: String,
    label: 'Predmet požiadavky',
    autoform: {
      rows: 8
    },
    optional: true
  },
  status: {
    type: String,
    label: 'Vybavené?',
    optional: true
  },
  createdAt: {
    type: String,
    label: 'Date'
  }
});
