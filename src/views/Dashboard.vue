<template>
  <div>
    <h1>Tableau de bord</h1>

    <h2>Mes réservations</h2>
    <ul v-if="reservations.length">
      <li v-for="(r, index) in reservations" :key="index">
        Salle ID: {{ r.id_salle }} — Date: {{ r.date }} — {{ r.heureDebut }} à
        {{ r.heureFin }}
      </li>
    </ul>
    <p v-else>Aucune réservation pour le moment.</p>

    <h2>Notifications</h2>
    <ul v-if="notifications.length">
      <li v-for="(n, index) in notifications" :key="index">
        {{ n.message }}
      </li>
    </ul>
    <p v-else>Aucune notification pour le moment.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["reservations", "notifications"]),
  },
};
</script>
