const bodyParser = require("body-parser");
const processNewMessage = require("./controllers/processNewMessage");
const bots = require("./controllers/bots");

const express = require("express");
const app = express();
const port = process.env.YOUR_PORT || process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static("./front-end/build/"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.post("/messages", processNewMessage);
app.post("/bots", bots);
