Pracovnici.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Ziadanky.helpers({
  meno: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].meno;
  },
  priezvisko: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].priezvisko;
  },
  titulPred: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].titulPred;
  },
  titulZa: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].titulZa;
  },
  utvar: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].utvar;
  },
  pracovisko: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].pracovisko;
  },
  referat: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].referat;
  },
  email: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].email;
  },
  telefon: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].telefon;
  },
  klapka: function () {
    return Ziadanky.findOne(this._id).ziadatelInfo[0].klapka;
  },
  ziadanky: function() {
    var ziadanky = Ziadanky.find().fetch();
    return ziadanky.map(function(ziadanka) {
      return [
        {data: ziadanka.createdAt, title: "Dátum"},
        {data: ziadanka.cislo, title: "Č. Ž."},
        {data: ziadanka.ziadatelInfo[0].priezvisko, title: "Priezvisko"},
        {data: ziadanka.ziadatelInfo[0].meno, title: "Meno"},
        {data: ziadanka.ziadatelInfo[0].email, title: "Email"},
        {data: ziadanka.ziadatelInfo[0].telefon, title: "Telefón"},
        {data: ziadanka.ziadatelInfo[0].klapka, title: "Klapka"},
        {data: ziadanka.ziadatelInfo[0].utvar, title: "Útvar"},
        {data: ziadanka.ziadatelInfo[0].pracovisko, title: "Pracovisko"},
        {data: ziadanka.ziadatelInfo[0].referat, title: "Referát"}
      ];
    });
  }
});
