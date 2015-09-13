TabularTables.Sklad = new Tabular.Table({
  name: "Sklad",
  collection: Sklad,
  allow: function (userId) {
    // check for admin role with alanning:roles package
    return Roles.userIsInRole(userId, 'admin');
  },
  order: [[0, "desc"]],
  columns: [
    {data: "createdAt", title: "Dátum"},
    {data: "cisloZiadanky", title: "Číslo žiadanky pre opravu"},
    {
      tmpl: Meteor.isClient && Template.statusNakup
    },
    {
      tmpl: Meteor.isClient && Template.ziadankaLink
    },
    {
      tmpl: Meteor.isClient && Template.editNakup
    },
    {
      tmpl: Meteor.isClient && Template.tlacNakup
    },
    {
      tmpl: Meteor.isClient && Template.deleteNakup
    }
  ]
});
