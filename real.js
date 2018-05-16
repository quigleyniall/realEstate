let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');
let app = express();
var request = require('request');




app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.get("/property/:buyrent",function(req,res){
  let type = req.params.buyrent
  request('https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type='+type+'&place_name=london', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var body = JSON.parse(body)

      res.render("index",{body: body})
    }
  })
})

app.post("/property/:buyrent", function(req,res){
  let location = req.body.location
  let type = req.params.buyrent
  let min = req.body.min || 0
  let max = req.body.max || 99999999999
  let bedroom_min = req.body.bedroom || 0
  let bedroom_max = req.body.bedroom || 50
  let bathroom_min = req.body.bathroom_min || 0
  let bathroom_max = req.body.bathroom_max || 100
  console.log(min)
  request('https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type='+type+'&place_name='+location+'&price_min='+min+'&price_max='+max+'&bedroom_min='+bedroom_min+'&bedroom_max='+bedroom_max+'&bathroom_min='+bathroom_min+'&bathroom_max='+bathroom_max+'&number_of_results=27', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body)
      res.render("index",{body:obj})
    }
  })
})

app.get("/", function(req, res){
  request('https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=London&price_min=4000000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body)
        res.render("home", {body: obj});
    }
  })
});
app.get("/register", function(req, res){
    let q = "SELECT COUNT(*) AS count FROM login"
    connection.query(q, function(error,results){
        if(error) throw error;
        let count = results[0].count;
        // res.send("We have " + results[0].count +" users");
        res.render("register", {data: count});
    });
});
app.get("/log-in", function(req, res){
    let q = "SELECT COUNT(*) AS count FROM login"
    connection.query(q, function(error,results){
        if(error) throw error;
        let count = results[0].count;
        // res.send("We have " + results[0].count +" users");
        res.render("log-in");
        // res.render("log-in", {data: count});
    });
});
let port = process.env.PORT || 8080
app.listen(port, function(){
    console.log('sever running')
});


//LOG IN
app.post("/log-in", function(req,res){


        let username = req.body.username
        let password = req.body.password
        let email = req.body.email

    connection.query('SELECT * FROM login WHERE username = ?',[username], function (error, results, fields) {
      if (error) {
     // console.log("error ocurred",error);
     res.send({
       "code":400,
       "failed":"error ocurred"
     })
   }else{
     // console.log('The solution is: ', results);
     if(results.length >0){
       if(results[0].password == password){
         res.render("index")
         // res.send({
         //   "code":200,
         //   "success":"login sucessfull"
         //     });
       }
       else{
         res.send({
           "code":204,
           "success":"Email and password does not match"
             });
       }
     }
     else{
       res.send({
         "code":204,
         "success":"Email does not exits"
           });
     }
   }
   });
});

app.post("/register", function(req,res){
console.log('hi')
let person = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    };
    console.log(person)

    connection.query('INSERT INTO login SET ?',person, function
    (error, result){
        if(error) throw error;
        res.redirect('log-in');

    });
});
