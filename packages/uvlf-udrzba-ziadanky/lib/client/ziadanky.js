Template.ziadanky.onCreated(function () {
  var self = this;

  self.autorun(function() {
    self.subscribe('pracovnici');
    self.subscribe('ziadanky');
  });
});
