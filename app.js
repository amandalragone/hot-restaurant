var express = require("express");
var path = require("path");
var $ = require("jquery");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
    customerName: "my name",
    phoneNumber: "12345678",
    customerEmail: "foefope@ihvojgor0",
    customerID: "1"
}
];

var waitList =[{
    customerName: "your name",
    phoneNumber: "0987654321",
    customerEmail: "lofsdofsoo@grkogkpgr",
    customerID: "2"
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));

});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));

});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));

});

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    reservations.push(newReservation);

    console.log(newReservation);
  
    res.json(newReservation);
  });

  app.post("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    waitList.push(newReservation);

    console.log(newReservation);
  
    res.json(newReservation);
  });
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
