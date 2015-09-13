Meteor.publish("sklad", function() {
  return Sklad.find();
});
