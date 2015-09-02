var subs = new SubsManager();

Template.nakupy.onCreated(function () {
  subs.subscribe('nakupy');
});