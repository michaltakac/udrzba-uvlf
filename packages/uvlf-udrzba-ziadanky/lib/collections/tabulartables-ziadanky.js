TabularTables.Ziadanky = new Tabular.Table({
  name: "Ziadanky",
  collection: Ziadanky,
  allow: function (userId) {
    // check for admin role with alanning:roles package
    return Roles.userIsInRole(userId, 'admin');
  },
  order: [[0, "desc"]],
  columns: [
    {data: "createdAt", title: "Dátum", class: "col-md-1",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).format("DD.MM.YYYY");
        } else {
          return val;
        }
      }
    },
    {data: "cislo", title: "Číslo žiadanky", class: "col-md-2"},
    {data: "ziadatelInfo_priezvisko", title: "Priezvisko", class: "col-md-2"},
    {data: "sprava", title: "Správa"},
    {
      tmpl: Meteor.isClient && Template.statusZiadanka, class: "col-md-1 status-column"
    },
    {
      tmpl: Meteor.isClient && Template.tableZiadankaTools, class: "col-md-2"
    }
  ]
});
