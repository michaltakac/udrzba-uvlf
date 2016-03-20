var ActiveDirectory = Npm.require('activedirectory');
var config = { url: 'ldap://MASRV01.uvlf.sk',
               baseDN: 'dc=uvlf,dc=sk',
               username: 'mtakac@uvlf.sk',
               password: 'CAYN.au7tg' }
var ad = new ActiveDirectory(config);

var username = 'vladimir.takac@uvlf.sk';
var password = 'levicek.6';

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR:  '+JSON.stringify(err));
    return;
  }

  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});