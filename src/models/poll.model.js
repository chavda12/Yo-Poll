const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema(
  {
    question: {
      type: "String",
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    collection: "polls",
  }
);
