Template.ziadankaSettings.onCreated(function () {

});

Template.ziadankaSettings.onRendered(function() {
  var pracovnici = ['Niekto 1', 'Niekto 2', 'Niekto 3', 'Niekto 4'];
  var ziadanka = Ziadanky.findOne();
  var selected = Ziadanky.findOne().pridelenyPracovnik;

  $('[data-type="datepicker"]').datepicker({
    format: "dd.mm.yyyy",
    weekStart: 1,
    language: "sk"
  });

  $('#zacatiePrac').datepicker('setDate', ziadanka.zacatiePrac);
  $('#ukonceniePrac').datepicker('setDate', ziadanka.ukonceniePrac);
  $.fn.select2.amd.require(
    ['select2/data/array', 'select2/utils'],
    function (ArrayData, Utils) {
      function CustomData ($element, options) {
        CustomData.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(CustomData, ArrayData);

      CustomData.prototype.current = function (callback) {
        var data = [];
        var currentVal = selected;

        if (!this.$element.prop('multiple')) {
          currentVal = [currentVal];
        }

        for (var v = 0; v < currentVal.length; v++) {
          data.push({
            id: currentVal[v],
            text: currentVal[v]
          });
        }

        callback(data);
      };

      $("#pridelenyPracovnik").select2({
        dataAdapter: CustomData,
        data: pracovnici
      });
    }
  );

});

Template.ziadankaSettings.helpers({
  ziadanka: function() {
    return Ziadanky.findOne();
  }
});

Template.ziadankaSettings.events({

});
