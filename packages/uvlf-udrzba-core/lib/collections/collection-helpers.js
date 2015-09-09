Pracovnici.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Nakupy.helpers({
  meno: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].meno;
  },
  priezvisko: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].priezvisko;
  },
  titulPred: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].titulPred;
  },
  titulZa: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].titulZa;
  },
  utvar: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].utvar;
  },
  pracovisko: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].pracovisko;
  },
  referat: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].referat;
  },
  email: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].email;
  },
  telefon: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].telefon;
  },
  klapka: function () {
    return Nakupy.findOne(this._id).ziadatelInfo[0].klapka;
  }
});
