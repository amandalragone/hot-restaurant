var express = require("express");
var path = require("path");
var $ = require("jquery");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitList =[];

function Reservation(customerName, phoneNumber, customerEmail, customerID) {
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.customerEmail = customerEmail;
    this.customerID = customerID;
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));

});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));

});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
