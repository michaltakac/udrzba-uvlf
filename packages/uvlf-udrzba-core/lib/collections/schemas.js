function filterPracovnikov(utvar) {
  var pracovnici = Pracovnici.find({utvar: utvar}).fetch();
  return pracovnici.map(function(ref) {
    var titulPred = "";
    var titulZa = "";
    if (ref.titulPred) {
      titulPred = ref.titulPred;
    }
    if (ref.titulZa) {
      titulZa = ', '+ref.titulZa;
    }
    return {
      label: titulPred + ' ' + ref.meno + ' ' + ref.priezvisko + titulZa,
      value: ref._id
    };
  });
}
SimpleSchema.debug = true;

Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);
