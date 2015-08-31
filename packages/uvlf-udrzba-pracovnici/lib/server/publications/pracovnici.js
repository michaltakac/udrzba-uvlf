Meteor.publishComposite("pracovnici", function() {
  return {
    find: function() {
      return Pracovnici.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});