var subs = new SubsManager();

Template.ziadanky.onCreated(function () {
  subs.subscribe('ziadanky');
  subs.subscribe('nakupy');
});
