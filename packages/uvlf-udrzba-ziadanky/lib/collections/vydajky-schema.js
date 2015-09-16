Schemas.Vydajky = new SimpleSchema({
  ziadankaId: {
    type: String
  },
  polozkaId: {
    type: String
  },
  nazovPolozky: {
    type: String
  },
  kategoria: {
    type: String
  },
  typ: {
    type: String
  },
  pocet: {
    type: Number
  },
  jednotka: {
    type: String
  },
  nakupId: {
    type: String,
    label: 'Nákup',
    optional: true
  },
  createdAt: {
    type: Date,
    label: 'Pridané',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});
