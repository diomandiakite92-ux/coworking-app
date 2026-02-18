const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    salle: { type: String, required: true },
    date: { type: String, required: true },
    heure: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Reservation", reservationSchema);
