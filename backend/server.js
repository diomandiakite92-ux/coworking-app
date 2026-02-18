require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Reservation = require("./models/Reservation");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connexion Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("❌ Erreur MongoDB:", err));

// ✅ test
app.get("/ping", (req, res) => res.send("Backend coworking OK"));

// ✅ GET reservations (depuis DB)
app.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (e) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ POST reservations (ajouter une réservation)
app.post("/reservations", async (req, res) => {
  try {
    const { salle, date, heure } = req.body;
    const created = await Reservation.create({ salle, date, heure });
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ error: "Données invalides" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));
