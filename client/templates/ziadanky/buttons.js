Template.statusZiadanka.helpers({
  status: function () {
    return Ziadanky.findOne(this._id).status;
  }
});

Template.editNakup.helpers({
  ziadankaId: function () {
    return Nakupy.findOne(this._id).ziadankaId;
  }
});

Template.tlacNakup.helpers({
  ziadankaId: function () {
    return Nakupy.findOne(this._id).ziadankaId;
  }
});

Template.ziadankaLink.helpers({
  ziadankaId: function () {
    return Nakupy.findOne(this._id).ziadankaId;
  }
});

Template.tlacZiadanka.helpers({
  disabled: function () {
    var status = Ziadanky.findOne(this._id).status;
    if (!status) {
      return "disabled";
    } else {
      return "";
    }
  }
});

Template.editZiadanka.events({
  'click .edit': function () {
    Router.go('/ziadanky/'+this._id+'/edit');
  }
});

Template.tlacZiadanka.events({
  'click .tlac': function () {
    Router.go('/ziadanky/'+this._id);
  }
});

Template.deleteNakup.events({
  'click .delete': function () {
    var confirmDelete = confirm('Naozaj chcete odstrániť žiadanku pre nákup?');
    if (confirmDelete) {
      Nakupy.remove(this._id);
    }
  }
});