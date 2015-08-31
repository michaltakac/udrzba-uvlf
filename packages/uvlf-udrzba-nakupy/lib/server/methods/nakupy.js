/*
* Data: Nakupy
* Methods for inserting data into Nakupy database.
*/



var Future = Npm.require('fibers/future');
var Fiber  = Npm.require('fibers');

Meteor.methods({

  startNakup: function(ziadankaId) {
    check(ziadankaId, String);
    var ziadanka = Ziadanky.findOne(ziadankaId);

    var nakup = {
      ziadankaId: ziadankaId,
      cisloZiadanky: ziadanka.cislo,
      typ: "Nákup",
      createdAt: moment(new Date()).format("DD.MM.YYYY, HH:mm:ss")
    }

    Nakupy.insert(nakup, function(error) {
      if (error) {
        throw new Meteor.Error("403", error);
      }
    });
  }
});
