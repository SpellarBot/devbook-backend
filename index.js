const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static("client/build"));
const passport = require("./config/passport")();
const routes = require("./Routes/appRoutes");

app.use("/", routes);
app.use(passport.initialize());

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});
