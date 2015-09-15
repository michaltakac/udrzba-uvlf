Template['ziadanka_edit_form'].onRendered(function() {
  $('#supisDodavok').select2({
    tags: true,
    placeholder: 'Pridajte položku do súpisu dodávok'
  });

  $('#ziadanka-edit').validate({
    ignore: null,
    submitHandler: function() {
      var array = []
      var pracovnici = $('#pridelenyPracovnik').val();
      if(pracovnici.length > 0) {
        array = pracovnici.split(',');
      }

      var editedInputs = {
        zacatiePrac:   $('#zacatiePrac').val(),
        ukonceniePrac: $('#ukonceniePrac').val(),
        priorita:      $('#priorita').val(),
        pridelenyPracovnik: array,
        supisDodavok: $('#supisDodavok').val()
      };
      console.log(editedInputs);
      Ziadanky.update(FlowRouter.getParam('_id'), {
        $set: editedInputs
      }, function(error) {
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
  },
  'click #vybavena': function(e) {
    var ziadankaId = FlowRouter.getParam('_id');
    var status = $(e.currentTarget).is(":checked");
    Session.set("statevalue", status);

    Ziadanky.update(ziadankaId, {
      $set: { vybavena: Session.get("statevalue") }
    }, function(error) {
      if (error) {
        Bert.alert('Status žiadanky sa nepodarilo aktualizovať.', 'danger', 'growl-top-right');
      } else {
        Bert.alert("Status žiadanky bol aktualizovaný.", 'success', 'growl-top-right');
      }
    });
  }
});
