var pracovnikId = new ReactiveVar();

Template.poziadavka.onCreated(function () {
  var self = this;

  pracovnikId.set(false);

  self.autorun(function() {
    self.subscribe('pracovnici');
    self.subscribe('ziadanky');
  });
});

Template.poziadavka.onRendered(function() {
  $('[name="ziadatel"]').select2();

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

Template.poziadavka.helpers({
  ziadatel: function() {
    return Pracovnici.find().fetch();
  },
  pracovnici: function() {
    return Pracovnici.find().fetch();
  },
  ziadanky: function() {
    return Ziadanky.find().fetch();
  },
  ziadatelInfo: function() {
    return Pracovnici.findOne(pracovnikId.get());
  },
  cislo: function() {
    var today = new Date();
    var year = moment(today).format('YYYY');
    return year + '/' + App.utils.pad(Ziadanky.find().fetch().length+1, 5);
  },
  datum: function() {
    var today = new Date()
    return moment(today).format("DD.MM.YYYY, HH:mm:ss");
  }
});

/**
 * Events
 */
Template.poziadavka.events({
  'submit form': function(e) {
    e.preventDefault();
  },
  'change [name="ziadatel"]': function(e) {
    e.preventDefault();
    pracovnikId.set($(e.currentTarget).val());
  }
});

