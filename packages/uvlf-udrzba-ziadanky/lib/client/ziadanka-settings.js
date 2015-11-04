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
      {_id: 'pracovnik_0001', name: 'p. Dranga'},
      {_id: 'pracovnik_0002', name: 'p. Dancák'},
      {_id: 'pracovnik_0003', name: 'p. Fusek'},
      {_id: 'pracovnik_0004', name: 'p. Lazur'},
      {_id: 'pracovnik_0005', name: 'p. Vendrák'},
      {_id: 'pracovnik_0006', name: 'p. Klik'},
      {_id: 'skupina_0001', name: 'Nádvorní'},
      {_id: 'skupina_0002', name: 'Ing. Chriaštelová'},
      {_id: 'organizacia_0001', name: 'Org. 1'},
      {_id: 'organizacia_0002', name: 'Org. 2'},
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
  },
  options:function(){
    return [
      {
        value:"Nízka",
        text:"Nízka"
      },
      {
        value:"Bežná",
        text:"Bežná"
      },
      {
        value:"Vysoká",
        text:"Vysoká"
      },
      {
        value:"Havarijná",
        text:"Havarijná"
      }
    ];
  }
});

Template.ziadankaSettings.events({

});
