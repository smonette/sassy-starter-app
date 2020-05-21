var express = require("express");
var sassMiddleware = require("node-sass-middleware");
var app = express();

// Sass needs to go before static file serving to work
app.use(sassMiddleware({
  src: __dirname + '/source',
  dest: __dirname + '/public',
}))


app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
