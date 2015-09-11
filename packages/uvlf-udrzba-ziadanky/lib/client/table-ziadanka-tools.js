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
    var confirmDelete = confirm('Naozaj chcete odstrániť žiadanku?');
    if (confirmDelete) {
      Ziadanky.remove(this._id);
      Bert.alert("Žiadanka bola odstránená.", 'success', 'growl-top-right');
    }
  }
});
