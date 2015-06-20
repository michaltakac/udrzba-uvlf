var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

Pracovnici = Collections.Pracovnici = new Meteor.Collection('Pracovnici');
Pracovnici.attachSchema(Schemas.Pracovnici);

Ziadanky = Collections.Ziadanky = new Meteor.Collection('Ziadanky');
Ziadanky.attachSchema(Schemas.Ziadanky);

Nakupy = Collections.Nakupy = new Meteor.Collection('Nakupy');
Nakupy.attachSchema(Schemas.Nakupy);
