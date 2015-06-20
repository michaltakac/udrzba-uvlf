AdminConfig = { 
  nonAdminRedirectRoute: 'entrySignIn',
  collections: { 
    Pracovnici: { 
      tableColumns: [
        {label: 'Titul pred', name: 'titulPred'},
        {label: 'Meno', name: 'meno'},
        {label: 'Priezvisko', name: 'priezvisko'},
        {label: 'Titul za', name: 'titulZa'},
        {label: 'Email', name: 'email'},
        {label: 'Telefon', name: 'telefon'},
        {label: 'Klapka', name: 'klapka'},
        {label: 'Útvar/katedra/klinika', name: 'utvar'},
        {label: 'Pracovisko', name: 'pracovisko'},
        {label: 'Referát', name: 'referat'},
      ]
    }
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
}
  
 