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
    {data: "cislo", title: "Číslo žiadanky", class: "col-md-2"},
    {data: "ziadatelInfo_priezvisko", title: "Žiadateľ", class: "col-md-2"},
    {data: "miesto", title: "Miesto"},
    {data: "predmet", title: "Predmet"},
    {data: "vybavena", title: "Status", class: "status-column", style: "width: 25px;",
      tmpl: Meteor.isClient && Template.statusZiadanka
    },
    {
      tmpl: Meteor.isClient && Template.tableZiadankaTools, class: "col-md-2"
    }
  ]
});
