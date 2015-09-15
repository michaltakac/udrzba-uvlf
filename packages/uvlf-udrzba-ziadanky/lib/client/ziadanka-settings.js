Template.ziadankaSettings.onCreated(function () {

});

Template.ziadankaSettings.onRendered(function() {
  var ziadanka = Ziadanky.findOne();
  var pracovnici = ziadanka.pridelenyPracovnik;

  var statsObj = _.map(pracovnici, function(name) {
    return {
      name: name
    }
  });
  Session.set('selected', statsObj);

  $('[data-type="datepicker"]').datepicker({
    format: "dd.mm.yyyy",
    weekStart: 1,
    language: "sk"
  });

  $('#zacatiePrac').datepicker('setDate', ziadanka.zacatiePrac);
  $('#ukonceniePrac').datepicker('setDate', ziadanka.ukonceniePrac);

  $('#pridelenyPracovnik').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    maxItems: null,
    preload: true,
    valueField: 'name',
    labelField: 'name',
    searchField: ['name', 'email'],
    options: [
      {_id: 'sdgsdfgsdfm7', name: 'Prvy Pracovnik'},
      {_id: 'sdfg2sd4gsd4', name: 'Druhy Pracovnik'},
      {_id: 'sdbnnf117ve7', name: 'Treti Pracovnik'}
    ],
    render: {
      item: function(item, escape) {
        return '<div>' +
          (item.name ? '<span class="label" style="color: black;">' + escape(item.name) + '</span> ' : '') +
        '</div>';
      },
      option: function(item, escape) {
        return '<div>' +
          '<span class="label" style="color: black;">' + escape(item.name) + '</span>' +
        '</div>';
      }
    },
    load: function (query, callback) {
      if (!query.length) return callback();
      return callback();
    },
    onInitialize: function() {
      var existingOptions = Session.get('selected');
      var self = this;
      if(Object.prototype.toString.call( existingOptions ) === "[object Array]") {
        existingOptions.forEach( function (existingOption) {
          self.addOption(existingOption);
          self.addItem(existingOption[self.settings.valueField]);
        });
      } else if (typeof existingOptions === 'object') {
        self.addOption(existingOptions);
        self.addItem(existingOptions[self.settings.valueField]);
      }
    }
  });
});

Template.ziadankaSettings.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  }
});

Template.ziadankaSettings.events({

});
