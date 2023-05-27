const express = require("express");
const config = require("./config");
const connectWithDB = require("./db/db");

const app = express();

app.listen(config.PORT, () => {
  console.log(`server listening on http://localhost:${config.PORT}`);
  connectWithDB();
});
