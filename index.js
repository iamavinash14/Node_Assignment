const express = require("express");
const bodyParser = require("body-parser");
const users = require("./users");
const cors = require("cors");
const app = express();

app.use("/api/users", users);
app.use(cors());
app.use(bodyParser.json());

let server = {
  port: 3000,
};

app.listen(server.port, () =>
  console.log(`Server started, listening on port: ${server.port}`)
);
