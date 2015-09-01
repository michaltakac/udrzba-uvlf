Router.route('generateZiadankaPDF', {
  path: '/ziadanky/:_id/pdf',
  where: 'server',
  action: function() {
    var ziadankaId = this.params._id
    var webshot    = Meteor.npmRequire('webshot');
    var fs         = Npm.require('fs');
    var Future     = Npm.require('fibers/future');
    var fut        = new Future();
    var fileName   = "ziadanka_" + ziadankaId + ".pdf";
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

    this.response.writeHead(200, {'Content-Type': 'application/pdf',"Content-Disposition": "attachment; filename=" + fileName});
    this.response.end(fut.wait());
  }
});