Template['ziadanka_edit_form'].onRendered(function() {
  $('#supisDodavok').select2({
    tags: true,
    placeholder: 'Pridajte položku do súpisu dodávok'
  });

  $('#ziadanka-edit').validate({
    ignore: null,
    submitHandler: function() {
      var editedInputs = {
        zacatiePrac:   $('#zacatiePrac').val(),
        ukonceniePrac: $('#ukonceniePrac').val(),
        priorita:      $('#priorita').val(),
        pridelenyPracovnik: $('#pridelenyPracovnik').val(),
        supisDodavok: $('#supisDodavok').val()
      };
      console.log(editedInputs);
      Meteor.call('ulozitZiadanku', editedInputs, FlowRouter.getParam('_id'), function(error) {
        if (error) {
          Bert.alert("Vyskytla sa chyba! Vyskúšajte uložiť žiadanku ešte raz. Ak problém pretrváva, obráťte sa prosím na administrátora.", 'danger', 'growl-top-right');
        } else {
          Bert.alert("Vaša požiadavka bola úspešne uložená.", 'success', 'growl-top-right');
        }
      });
    }
  });
});

Template['ziadanka_edit_form'].helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  },
  dodavky: function() {
    return Ziadanky.findOne().supisDodavok;
  }
});

Template['ziadanka_edit_form'].events({
  'click [data-event="delete-dodavka"]': function(e) {
    e.preventDefault();
    console.log($(e.target).val());
  }
});
