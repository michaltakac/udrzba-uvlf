Schemas.Sklad = new SimpleSchema({
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
