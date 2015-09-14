Template.tableZiadankaTools.onCreated(function() {

});

Template.tableZiadankaTools.onRendered(function() {

});

Template.tableZiadankaTools.helpers({
  ziadankaId: function () {
    return Nakupy.findOne(this._id).ziadankaId;
  },
  nakupExists: function () {
    var nakup = Nakupy.findOne({"ziadankaId": this._id});
    if (!nakup) {
      return false;
    } else {
      return true;
    }
  },
  disabled: function () {
    var status = Ziadanky.findOne(this._id).status;
    if (!status) {
      return "disabled";
    } else {
      return "";
    }
  }
});

Template.tableZiadankaTools.events({
  'click [data-action="delete-ziadanka"]': function (e) {
    e.preventDefault();
    var ziadanka = Ziadanky.findOne(this._id);
    var confirmDelete = confirm('Naozaj chcete archivovať žiadanku?');
    if (ziadanka.vybavena === true && confirmDelete) {
      Ziadanky.update(this._id, {
        $set: { archived: true }
      }, function(error) {
        if (error) {
          Bert.alert('Žiadanku sa nepodarilo archivovať.', 'danger', 'growl-top-right');
        } else {
          Bert.alert("Žiadanka bola archivovaná.", 'success', 'growl-top-right');
        }
      });
    } else {
      Bert.alert('Skontrolujte, či je žiadanka vybavená. Žiadanky bez tohto statusu nie je možné archivovať!', 'danger', 'growl-top-right');
    }
  }
});
