Template.ziadankaSettings.onCreated(function () {

});

Template.ziadankaSettings.onRendered(function() {
  $('#zacatiePrac').datepicker({
    format: "dd.mm.yyyy",
    weekStart: 1,
    language: "sk"
  });

  $('#ukonceniePrac').datepicker({
    format: "dd.mm.yyyy",
    weekStart: 1,
    language: "sk"
  });
});

Template.ziadankaSettings.helpers({

});

Template.ziadankaSettings.events({

});
