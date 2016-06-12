var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {


	console.log("Travel application is running!");

	var myName = "Yuma";
	app.get("/", function (req, resp) {
    resp.render('index');
	});

  app.get('/icecream/:flavor', function(req, resp){
    resp.render('icecream', {
      flavor: req.params.flavor
    });
  })

  app.get ('/blog', function(req, resp){
    db.findArray ({}, function(results){
      console.log(results);
      resp.render('blog', { results: results})
    });
  })
  
});