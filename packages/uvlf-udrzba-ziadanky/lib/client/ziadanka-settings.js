Template.ziadankaSettings.onCreated(function () {

});

Template.ziadankaSettings.onRendered(function() {
  var pracovnici = ['Niekto 1', 'Niekto 2', 'Niekto 3', 'Niekto 4'];
  var ziadanka = Ziadanky.findOne();
  Session.set('selected', Ziadanky.findOne().pridelenyPracovnik);

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
    load: function(query, callback) {
      if(!query.length) return callback();
      callback(Session.get('selected'));
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
