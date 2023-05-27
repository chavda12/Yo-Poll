const express = require("express");
const config = require("./config");
const connectWithDB = require("./db/db");

const ApiRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", ApiRouter);

// Health check function
app.get("/", (_, res) => {
  res.send(`Server is listening at ${new Date()}`);
});

app.listen(config.PORT, () => {
  console.log(`server listening on http://localhost:${config.PORT}`);
  connectWithDB();
});
