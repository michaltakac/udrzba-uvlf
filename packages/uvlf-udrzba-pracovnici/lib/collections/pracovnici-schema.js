Schemas.Pracovnici = new SimpleSchema({
  utvar: {
    type: String,
    autoform: {
      type: "select2",
      options: function() {
        return uvlf.map(function(utvar) {
          return {
            label: utvar.nazov,
            value: utvar.nazov
          };
        });
      }
    }
  },
  pracovisko: {
    type: String,
    autoform: {
      type: "select2",
      options: function() {
        return pracoviska.map(function(pracovisko) {
          return {
            label: pracovisko.nazov,
            value: pracovisko.nazov
          };
        });
      }
    }
  },
  referat: {
    type: String,
    autoform: {
      type: "select2",
      options: function() {
        return referaty.map(function(referat) {
          return {
            label: referat.nazov,
            value: referat.nazov
          };
        });
      }
    }
  },
  titulPred: {
    type: String,
    max: 20,
    optional: true
  },
  meno: {
    type: String
  },
  priezvisko: {
    type: String
  },
  titulZa: {
    type: String,
    max: 20,
    optional: true
  },
  email: {
    type: SimpleSchema.RegEx.Email,
    optional: true
  },
  telefon: {
    type: String,
    optional: true
  },
  klapka: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});