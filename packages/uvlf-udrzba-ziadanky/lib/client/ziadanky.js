Template.ziadanky.onCreated(function () {
  var self = this;
  self.autorun(function() {
    self.subscribe('ziadanky');
    self.subscribe('pracovnici');
    self.subscribe('nakupy');
  });
});
