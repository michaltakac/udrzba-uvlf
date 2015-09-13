Template.ziadanky.onCreated(function () {
  /*var self = this;

  self.autorun(function() {
    self.subscribe('pracovnici');
    self.subscribe('ziadanky');
  });*/
});

Template.ziadanky.onRendered(function() {

});

Template.ziadanky.events({
  'click tbody > tr': function (event, template) {
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    console.log(rowData.sprava);
  }
});
