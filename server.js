// Require/import the HTTP module
var http = require("http");
var express = require ("express")
var path = require ("path")

// sets up the Express APP
var app = express();
var PORT = 3000;





// Create a generic function to handle requests and responses


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

