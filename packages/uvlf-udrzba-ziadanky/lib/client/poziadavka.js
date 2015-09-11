Template.poziadavka.onCreated(function () {
  var self = this;

  self.autorun(function() {
    self.subscribe('pracovnici');
    self.subscribe('ziadanky');
  });
});

Template.poziadavka.onRendered(function() {

});

Template.poziadavka.helpers({

});

/**
 * Events
 */
Template.poziadavka.events({

});

