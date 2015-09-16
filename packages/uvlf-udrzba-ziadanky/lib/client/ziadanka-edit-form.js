var counter = ReactiveVar(0);
var ziadankaId;

Template['ziadanka_edit_form'].onCreated(function() {
  var self = this;

  self.autorun(function() {
    ziadankaId = FlowRouter.getParam('_id');
    self.subscribe('sklad');
    self.subscribe('vydajka', ziadankaId);
  });
});

Template['ziadanka_edit_form'].onRendered(function() {
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

      Ziadanky.update(ziadankaId, {
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
  skladoveZasoby: function() {
    return Sklad.find().fetch();
  },
  vydajka: function() {
    return Vydajky.find().fetch().map(function(i, poradie) {
      return {
        _id: i._id,
        polozkaId: i.polozkaId,
        index: poradie + 1,
        kategoria: i.kategoria,
        nazovPolozky: i.nazovPolozky,
        jednotka: i.jednotka,
        pocet: i.pocet
      }
    });
  }
});

Template['ziadanka_edit_form'].events({
  'click [data-event="delete-polozka"]': function(e) {
    e.preventDefault();
    var vydajkaId = $(e.target).attr('data-id');
    Vydajky.remove(vydajkaId, function(error) {
      if (error) {
        Bert.alert('Vyskytla sa chyba, nepodarilo sa odstrániť položku.', 'danger', 'growl-top-right');
      }
    });
  },
  'click [data-event="add-row"]': function(e) {
    e.preventDefault();
    var polozkaId = $('#zasoby').val();
    var skladPolozka = Sklad.findOne(polozkaId);

    var polozka = {
      ziadankaId: ziadankaId,
      polozkaId: skladPolozka._id,
      nazovPolozky: skladPolozka.nazovPolozky,
      kategoria: skladPolozka.kategoria,
      typ: skladPolozka.typ,
      pocet: skladPolozka.pocet,
      jednotka: skladPolozka.jednotka
    };

    Vydajky.insert(polozka, function(error) {
      if (error) {
        Bert.alert('Vyskytla sa chyba.', 'danger', 'growl-top-right');
      }
    });
  },
  'click #vybavena': function(e) {
    e.preventDefault();
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


/* ---------------------------------------*/
Template["zasoby_select"].onRendered(function() {
  $('#zasoby').selectize({
    placeholder: 'Vyberte položku zo skladu a kliknite na "Pridaj položku"',
    valueField: '_id',
    labelField: 'name',
    searchField: 'name',
    render: {
      option: function(item, escape) {
        return '<div>' +
            escape(item.name) +
            '</div>';
      }
    }
  });
});

Template["zasoby_select"].events({

});

