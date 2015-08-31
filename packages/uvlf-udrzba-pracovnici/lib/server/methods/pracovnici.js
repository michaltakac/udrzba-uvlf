/*
* Data: Pracovnici UVLF
* Methods for inserting data into Pracovnici database.
*/

var Future = Npm.require('fibers/future');
var Fiber  = Npm.require('fibers');

Meteor.methods({

  vlozitPracovnika: function(pracovnik, referat, pracovisko, utvar) {
    check(pracovnik, {
      titulPred: String,
      meno: String,
      priezvisko: String,
      titulZa: String,
      email: String,
      telefon: String,
      klapka: Number
    });
    check(referat, String);
    check(pracovisko, String);
    check(utvar, String);

    var today = new Date();
    var vlozenie = new Future();

    var pracovnik = {
      titulPred: pracovnik.titulPred,
      meno: pracovnik.meno,
      priezvisko: pracovnik.priezvisko,
      titulZa: pracovnik.titulZa,
      email: pracovnik.email,
      telefon: pracovnik.telefon,
      klapka: pracovnik.klapka,
      referat: referat,
      pracovisko: pracovisko,
      utvar: utvar
    }

    Pracovnici.insert(pracovnik, function(error, response) {
      if (error) {
        vlozenie.return("Chyba pri vkladaní pracovníka do databáze");
      } else {
        vlozenie.return("Pracovník bol úspešne pridaný do databázy!");
      }
    });

    return vlozenie.wait();
  }
});
