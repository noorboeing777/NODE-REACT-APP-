const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./models/Users");
const keys = require("./config/keys");

require("./service/passport");

mongoose.connect(keys.mongoURI, { useMongoClient: true });
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);//f
app.use(passport.initialize());
app.use(passport.session());
require("./controller/authRoutes")(app);
require("./controller/billing")(app);
require("./controller/survey")(app);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}//f

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(PORT);
