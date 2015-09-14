Picker.route('/ziadanky/:_id/pdf', function(params, req, res, next) {
  var ziadankaId = params._id
  var cislo      = Ziadanky.findOne(ziadankaId).cislo;
  var webshot    = Npm.require('webshot');
  var fs         = Npm.require('fs');
  var Future     = Npm.require('fibers/future');
  var fut        = new Future();
  var fileName   = "ziadanka_" + cislo + ".pdf";
  var url        = Meteor.absoluteUrl('ziadanky/' + ziadankaId);

  var options = {
    "renderDelay": 3000,
    "paperSize": {
      "format": "Letter",
      "orientation": "portrait",
      "margin": "1cm"
    }
  };

  webshot(url, fileName, options, function(err) {
    if (err) {
      return console.log(err);
    } else {
      fs.readFile(fileName, function (error,data) {
        if (error) {
          return console.log(err);
        }

        fs.unlinkSync(fileName);
        fut.return(data);
      });
    }
  });

  res.writeHead(200, {'Content-Type': 'application/pdf',"Content-Disposition": "attachment; filename=" + fileName});
  res.end(fut.wait());
});
