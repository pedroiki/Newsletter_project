//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// this a base of any project this requires

const app = express();

app.use(express.static("public"));        //with this will use as a default css using this folder items
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

var firstName= req.body.fName;
var lastName= req.body.lName;
var email= req.body.email;

console.log(firstName, lastName, email);

});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
