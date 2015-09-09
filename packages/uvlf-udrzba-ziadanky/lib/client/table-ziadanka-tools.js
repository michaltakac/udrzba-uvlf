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
  'click [data-action="edit"]': function (e) {
    e.preventDefault();
    Router.go('/ziadanky/'+this._id+'/edit');
  },
  'click [data-action="nahlad-tlace"]': function (e) {
    e.preventDefault();
    Router.go('/ziadanky/'+this._id);
  },
  'click [data-action="pdf"]': function (e) {
    e.preventDefault();
    Router.go('/ziadanky/'+this._id+'/pdf');
  },
  'click [data-action="delete-ziadanka"]': function (e) {
    e.preventDefault();
    var confirmDelete = confirm('Naozaj chcete odstrániť žiadanku pre nákup?');
    if (confirmDelete) {
      Nakupy.remove(this._id);
    }
  }
});
