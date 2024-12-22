const express = require("express");
const app = express();
const port = 6149;
const cors = require("cors");

app.use(
  cors(),
  express.json(),
  express.urlencoded({extended: true})
);

const routes = express.Router();
routes.route("/")
  .get((req, rsp) =>
    rsp.json({success: "true"})
  );

app.use("", routes);

app.listen(port, () => console.log(`Listening on port ${port}...`));
