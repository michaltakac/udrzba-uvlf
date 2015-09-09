TabularTables.Ziadanky = new Tabular.Table({
  name: "Ziadanky",
  collection: Ziadanky,
  allow: function (userId) {
    // check for admin role with alanning:roles package
    return Roles.userIsInRole(userId, 'admin');
  },
  order: [[0, "desc"]],
  columns: [
    {data: "createdAt", title: "Dátum",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).format("DD.MM.YYYY");
        } else {
          return val;
        }
      }
    },
    {data: "cislo", title: "Číslo žiadanky"},
    {data: "ziadatelInfo_priezvisko", title: "Priezvisko"},
    {data: "sprava", title: "Správa"},
    {
      tmpl: Meteor.isClient && Template.statusZiadanka
    },
    {
      tmpl: Meteor.isClient && Template.tableZiadankaTools
    }
  ]
});
