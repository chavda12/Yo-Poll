const mongoose = require("mongoose");
const appConfig = require("../config");

const connectWithDB = async () => {
  try {
    mongoose.connect(appConfig.DB_URL, {}).then(() => {
      console.log("mongoose connected");
    });
  } catch (error) {}
};

module.exports = connectWithDB;
