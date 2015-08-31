/*
* Data: Ziadanky
* Methods for inserting data into Ziadanky database.
*/



var Future = Npm.require('fibers/future');
var Fiber  = Npm.require('fibers');

Meteor.methods({

  vlozitZiadanku: function(ziadanka) {
    check(ziadanka, {
      ziadatel: String,
      ziadatelInfo: Array,
      miesto: String,
      sprava: String,
      typ: String,
      cislo: String,
      createdAt: String
    });

    var nova = {
      ziadatel: ziadanka.ziadatel,
      ziadatelInfo: ziadanka.ziadatelInfo,
      miesto: ziadanka.miesto,
      sprava: ziadanka.sprava,
      typ: ziadanka.typ,
      cislo: ziadanka.cislo,
      createdAt: ziadanka.createdAt,
    }

    Ziadanky.insert(ziadanka, function(error) {
      if (error) {
        throw new Meteor.Error("403", "Chyba pri vkladaní ziadanky do databázy");
      }
    });
  }
});
