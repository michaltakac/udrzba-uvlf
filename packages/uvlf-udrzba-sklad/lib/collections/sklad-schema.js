Schemas.Sklad = new SimpleSchema({
  kategoria: {
    type: String,
    label: 'Názov skladu *',
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Sklad náradia správy areálu", value: "Sklad náradia správy areálu"},
          {label: "Sklad náradia údržby", value: "Sklad náradia údržby"},
          {label: "Sklad záhradného náradia", value: "Sklad záhradného náradia"},
          {label: "Farby - laky", value: "Farby - laky"},
          {label: "Vodár", value: "Vodár"},
          {label: "Kúrenár", value: "Kúrenár"},
          {label: "Elektrikár", value: "Elektrikár"},
          {label: "Stavebný materiál", value: "Stavebný materiál"},
          {label: "Sklad réžijného materiálu", value: "Sklad réžijného materiálu"},
          {label: "Stolár", value: "Stolár"},
          {label: "Sklenár", value: "Sklenár"}
        ];
      }
    }
  },
  skladovaCena: {
    type: String,
    label: 'Skladová cena',
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Priemerová", value: "Priemerová"},
          {label: "FIFO", value: "FIFO"}
        ];
      }
    },
    optional: true
  },
  typ: {
    type: String,
    label: 'Typ',
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Náradie", value: "Náradie"},
          {label: "Materiál", value: "Materiál"}
        ];
      }
    },
  },
  nazovPolozky: {
    type: String,
    label: 'Názov položky *'
  },
  poznamka: {
    type: String,
    label: 'Poznámka',
    optional: true
  },
  pocet: {
    type: Number,
    label: 'Počet *'
  },
  jednotka: {
    type: String,
    label: 'Jednotka *'
  },
  sadzbaDph: {
    type: String,
    label: 'Sadzba DPH',
    optional: true
  },
  createdAt: {
    type: Date,
    label: 'Dátum vytvorenia',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});
