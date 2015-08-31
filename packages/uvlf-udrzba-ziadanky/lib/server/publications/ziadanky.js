Meteor.publish("ziadanky", function() {
  return Ziadanky.find({});
});

Meteor.publish("ziadanka", function(ziadankaId) {
  return Ziadanky.find({"_id": ziadankaId});
});

