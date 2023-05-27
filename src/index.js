const express = require("express");
const config = require("./config");
const connectWithDB = require("./db/db");

const app = express();

// Health check function
app.get("/", (_, res) => {
  res.send(`Server is listening at ${new Date()}`);
});

app.listen(config.PORT, () => {
  console.log(`server listening on http://localhost:${config.PORT}`);
  connectWithDB();
});
