<template>
  <div>
    <h1>Réserver une salle</h1>

    <form @submit.prevent="reserver">
      <label>Salle</label>
      <select v-model="id_salle" required>
        <option v-for="salle in salles" :key="salle.id" :value="salle.id">
          {{ salle.nom }} (Capacité: {{ salle.capacite }})
        </option>
      </select>

      <label>Date</label>
      <input type="date" v-model="date" required />

      <label>Heure début</label>
      <input type="time" v-model="heureDebut" required />

      <label>Heure fin</label>
      <input type="time" v-model="heureFin" required />

      <button type="submit">Valider</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ReservationForm",
  data() {
    return {
      id_salle: null,
      date: "",
      heureDebut: "",
      heureFin: "",
    };
  },
  computed: {
    ...mapState(["salles"]),
  },
  mounted() {
    this.$store.dispatch("fetchSalles");
  },
  methods: {
    reserver() {
      if (!this.id_salle) {
        alert("Veuillez sélectionner une salle !");
        return;
      }

      // Ajouter la réservation dans Vuex
      this.$store.commit("addReservation", {
        id_salle: this.id_salle,
        date: this.date,
        heureDebut: this.heureDebut,
        heureFin: this.heureFin,
      });

      alert("Réservation effectuée avec succès !");
      // Reset formulaire
      this.id_salle = null;
      this.date = "";
      this.heureDebut = "";
      this.heureFin = "";
    },
  },
};
</script>
