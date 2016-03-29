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
        return moment(val).format("DD.MM.YYYY");
      }
    },
    {data: "cislo", title: "ID", class: "table-cislo-ziadanky"},
    {data: "ziadatelInfo_priezvisko", title: "Žiadateľ", class: "table-ziadatel"},
    {data: "pridelenyPracovnik", title: "Pracovnik"},
    {data: "miesto", title: "Miesto"},
    {data: "predmet", title: "Predmet"},
    {data: "vybavena", title: "", class: "status-column", style: "width: 25px;",
      tmpl: Meteor.isClient && Template.statusZiadanka
    },
    {
      tmpl: Meteor.isClient && Template.tableZiadankaTools, class: "col-md-2"
    }
  ]
});
