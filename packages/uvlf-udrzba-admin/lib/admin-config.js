AdminConfig = {
  name: 'Údržba UVLF',
  adminEmails: ['takacmichal92@gmail.com', 'vladimir.takac@uvlf.sk'],
  nonAdminRedirectRoute: 'entrySignIn',
  collections: {
    Pracovnici: {
      tableColumns: [
        { label: 'Titul pred', name: 'titulPred' },
        { label: 'Meno', name: 'meno' },
        { label: 'Priezvisko', name: 'priezvisko' },
        { label: 'Titul za', name: 'titulZa' },
        { label: 'Email', name: 'email' },
        { label: 'Telefon', name: 'telefon' },
        { label: 'Klapka', name: 'klapka' },
        { label: 'Útvar/katedra/klinika', name: 'utvar' },
        { label: 'Pracovisko', name: 'pracovisko' },
        { label: 'Referát', name: 'referat' },
      ]
    },
    Sklad: {
      tableColumns: [
        { label: 'Sklad', name: 'kategoria' },
        { label: 'Názov položky', name: 'nazovPolozky' },
        { label: 'Typ', name: 'typ' },
        { label: 'Počet', name: 'pocet' },
        { label: 'Jednotka', name: 'jednotka' },
        { label: 'Správca', name: 'spravcaSkladu' }
      ]
    }
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
}


