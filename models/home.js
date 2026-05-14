const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    profession: {
      type: String,
      required: true,
      enum: [
        "Electrical Work",
        "Plumbing Service",
        "IT Support",
        "Construction Worker",
        "Home Cleaning",
        "Painter",
        "AC Repair",
        "Moving Service",
        "Car Mechanic",
        "Gardening",
        "Delivery Rider",
        "Security Guard",
        "Chef / Cook",
        "Tailor",
        "Driver",
        "Decorator",
      ],
    },

    phone: String,
    location: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema);