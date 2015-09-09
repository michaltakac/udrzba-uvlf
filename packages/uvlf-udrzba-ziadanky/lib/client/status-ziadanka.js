Template.statusZiadanka.helpers({
  status: function () {
    return Ziadanky.findOne(this._id).status;
  }
});