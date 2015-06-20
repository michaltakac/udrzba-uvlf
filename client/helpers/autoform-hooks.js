AutoForm.addHooks(["ziadanka"], {

    onSubmit: function(doc) {
      if (doc) {
        Meteor.call('vlozitZiadanku', doc, function(error) {
          if (error) {
            this.done(new Error("Insertion to database failed"));
          } else {
            alert("Vaša požiadavka bola úspešne odoslaná.")
          }
        });
      } else {
        this.done(new Error("Submission failed"));
      }
      return false;
    },

    onSuccess: function(operation, result, template) {
        // display success, reset form status
        //console.log("CAPTCHA Validation Success! Email Sent!");
    }, 

    onError: function(operation, error, template) {
        // display error, reset form status
        //console.log("Error: CAPTCHA Validation failed!");
        console.log(error);
    }
});