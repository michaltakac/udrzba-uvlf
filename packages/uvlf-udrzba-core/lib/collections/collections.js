var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

Pracovnici = Collections.Pracovnici = new Meteor.Collection('Pracovnici');
Pracovnici.attachSchema(Schemas.Pracovnici);

Ziadanky = new Mongo.Collection('Ziadanky');

Nakupy = Collections.Nakupy = new Meteor.Collection('Nakupy');
Nakupy.attachSchema(Schemas.Nakupy);
