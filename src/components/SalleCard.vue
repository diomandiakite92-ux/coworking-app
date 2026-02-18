<template>
  <div class="card" style="border: 1px solid #ccc; padding: 10px; margin: 5px">
    <h3>{{ salle.nom }}</h3>
    <p>Capacité : {{ salle.capacite }}</p>
    <p>Équipements : {{ salle.equipements }}</p>
    <router-link :to="{ name: 'Reservation' }">
      <button>Réserver</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SalleCard",
  props: {
    salle: Object,
  },
};
</script>
