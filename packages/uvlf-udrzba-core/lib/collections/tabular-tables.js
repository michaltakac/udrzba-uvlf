TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Ziadanky = new Tabular.Table({
  name: "Ziadanky",
  collection: Ziadanky,
  allow: function (userId) {
    // check for admin role with alanning:roles package
    return Roles.userIsInRole(userId, 'admin');
  },
  order: [[0, "desc"]],
  columns: [
    {data: "createdAt", title: "Dátum"},
    {data: "cislo", title: "Číslo žiadanky"},
    {data: "priezvisko()", title: "Priezvisko"},
    {data: "sprava()", title: "Správa"},
    {
      tmpl: Meteor.isClient && Template.statusZiadanka
    },
    {
      tmpl: Meteor.isClient && Template.editZiadanka
    },
    {
      tmpl: Meteor.isClient && Template.ziadankaAddNakup
    },
    {
      tmpl: Meteor.isClient && Template.tlacZiadanka
    }
  ]
});

TabularTables.Nakupy = new Tabular.Table({
  name: "Nakupy",
  collection: Nakupy,
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