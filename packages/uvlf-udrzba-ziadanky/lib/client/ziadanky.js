Template.ziadanky.onCreated(function () {
  /*var self = this;

  self.autorun(function() {
    self.subscribe('ziadanky');
  });*/
});

Template.ziadanky.onRendered(function() {

});

Template.ziadanky.helpers({
  selector: function () {
    return { archived: false }; // this could be pulled from a Session var or something that is reactive
  }
});

Template.ziadanky.events({
  'click tbody > tr': function (event, template) {
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    console.log(rowData.sprava);
  }
});

/* ------------------------------------------ */

Template.ziadankyArchiv.helpers({
  selector: function () {
    return { archived: true }; // this could be pulled from a Session var or something that is reactive
  }
});
