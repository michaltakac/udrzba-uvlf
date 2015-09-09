var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

Pracovnici = Collections.Pracovnici = new Mongo.Collection('Pracovnici');
Pracovnici.attachSchema(Schemas.Pracovnici);

Nakupy = Collections.Nakupy = new Mongo.Collection('Nakupy');
Nakupy.attachSchema(Schemas.Nakupy);
