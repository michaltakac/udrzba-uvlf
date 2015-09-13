Template.ziadankaSettings.onCreated(function () {

});

Template.ziadankaSettings.onRendered(function() {
  var pracovnici = ['Niekto 1', 'Niekto 2', 'Niekto 3', 'Niekto 4'];

  $('[data-type="datepicker"]').datepicker({
    format: "dd.mm.yyyy",
    weekStart: 1,
    language: "sk"
  });

  $('#pridelenyPracovnik').select2({
    placeholder: 'Vyberte pracovníka',
    data: pracovnici
  });
});

Template.ziadankaSettings.helpers({

});

Template.ziadankaSettings.events({

});
