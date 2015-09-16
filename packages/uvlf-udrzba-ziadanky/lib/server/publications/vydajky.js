Meteor.publish("vydajka", function(ziadankaId) {
  return Vydajky.find({"ziadankaId": ziadankaId});
});

