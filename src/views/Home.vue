<template>
  <div>
    <h1>Accueil – Liste des salles</h1>

    <SalleCard v-for="salle in salles" :key="salle.id" :salle="salle" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SalleCard from "../components/SalleCard.vue";

export default {
  name: "Home",
  components: { SalleCard },
  computed: mapState(["salles"]),
  mounted() {
    this.$store.dispatch("fetchSalles");
  },
};
</script>
