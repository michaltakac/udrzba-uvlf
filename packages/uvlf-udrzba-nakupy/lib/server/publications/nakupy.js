Meteor.publish("nakupy", function() {
  return Nakupy.find();
});

Meteor.publish("nakup", function(ziadankaId) {
  return Nakupy.find({"ziadankaId": ziadankaId});
});
