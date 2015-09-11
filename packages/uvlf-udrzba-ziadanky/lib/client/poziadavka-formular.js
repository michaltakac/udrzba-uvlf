var pracovnikId = new ReactiveVar();

Template.poziadavkaFormular.onCreated(function () {
  pracovnikId.set(false);
});

Template.poziadavkaFormular.onRendered(function() {
  $('#formular-poziadavka').validate({
    rules: {
      ziadanka: {
        required: true
      },
      miesto: {
        required: true
      },
      sprava: {
        required: true
      }
    },
    messages: {
      ziadanka: {
        required: "Vyberte žiadateľa podľa mena."
      },
      miesto: {
        required: "Vyplňte miesto poruchy."
      },
      sprava: {
        required: "Vyplňte predmet požiadavky."
      }
    },
    submitHandler: function() {
      var ziadanka = {
        ziadatelId: $('#ziadatel').val(),
        miesto: $('#miesto').val(),
        sprava: $('#sprava').val()
      };

      Meteor.call('vlozitZiadanku', ziadanka, function(error) {
        if (error) {
          Bert.alert("Vyskytla sa chyba! Vyskúšajte odoslať žiadanku ešte raz. Ak problém pretrváva, obráťte sa prosím na administrátora.", 'danger', 'growl-top-right');
        } else {
          Bert.alert("Vaša požiadavka bola úspešne odoslaná.", 'success', 'growl-top-right');
        }
      });
    }
  });
});

Template.poziadavkaFormular.helpers({
  ziadatel: function() {
    return Pracovnici.find().fetch();
  },
  cislo: function() {
    var today = new Date();
    var year = moment(today).format('YYYY');
    return year + '/' + App.utils.pad(Ziadanky.find().fetch().length+1, 5);
  }
});

/**
 * Events
 */
Template.poziadavkaFormular.events({
  'submit form': function(e) {
    e.preventDefault();
  },
  'change [name="ziadatel"]': function(e) {
    e.preventDefault();
    pracovnikId.set($(e.currentTarget).val());
  }
});
