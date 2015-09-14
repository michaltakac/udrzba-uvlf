Meteor.startup(function() {
  if(Meteor.users.find().count() < 2){
    var first = Accounts.createUser({
      profile: {
        utvar: 'Útvar rektora',
        pracovisko: 'Oddelenie právne a vnútorného auditu',
        referat: 'Vedúci/a oddelenia',
        titulPred: 'Bc.',
        meno: 'Michal',
        priezvisko: 'Takáč',
        titulZa: '',
        telefon: '+421911334797',
        klapka: '1234',
        updatedAt: new Date()
      },
      email: 'mtskate981@gmail.com',
      password: 'password'
    });
    var second = Accounts.createUser({
      profile: {
        utvar: 'Útvar rektora',
        pracovisko: 'Oddelenie právne a vnútorného auditu',
        referat: 'Vedúci/a oddelenia',
        titulPred: 'Ing.',
        meno: 'Tatiana',
        priezvisko: 'Takáčová',
        titulZa: '',
        telefon: '+421902243638',
        klapka: '1235',
        updatedAt: new Date()
      },
      email: 'tatiana.takacova@uvlf.sk',
      password: 'password'
    });
    Roles.setUserRoles(first, 'user', 'default-group');
    Roles.setUserRoles(second, 'user', 'default-group');
  }
});
