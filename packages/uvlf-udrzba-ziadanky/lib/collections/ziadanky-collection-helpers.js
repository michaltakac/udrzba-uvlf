Ziadanky.helpers({
  nakup: function () {
    return Ziadanky.findOne(this._id).nakupId;
  }
  /*ziadanky: function() {
    var ziadanky = Ziadanky.find().fetch();
    return ziadanky.map(function(ziadanka) {
      return [
        {data: ziadanka.createdAt, title: "Dátum"},
        {data: ziadanka.cislo, title: "Č. Ž."},
        {data: ziadanka.ziadatelInfo[0].priezvisko, title: "Priezvisko"},
        {data: ziadanka.ziadatelInfo[0].meno, title: "Meno"},
        {data: ziadanka.ziadatelInfo[0].email, title: "Email"},
        {data: ziadanka.ziadatelInfo[0].telefon, title: "Telefón"},
        {data: ziadanka.ziadatelInfo[0].klapka, title: "Klapka"},
        {data: ziadanka.ziadatelInfo[0].utvar, title: "Útvar"},
        {data: ziadanka.ziadatelInfo[0].pracovisko, title: "Pracovisko"},
        {data: ziadanka.ziadatelInfo[0].referat, title: "Referát"}
      ];
    });
  }*/
});