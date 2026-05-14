const mongoose = require("mongoose");

const newPostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },  

    details: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["worker", "job"],
      default: "worker",
    },

    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NewPost", newPostSchema);