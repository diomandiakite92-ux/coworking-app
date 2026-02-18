import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      salles: [],
      reservations: [],
      notifications: [],
    };
  },

  mutations: {
    setSalles(state, salles) {
      state.salles = salles;
    },
    addReservation(state, reservation) {
      state.reservations.push(reservation);
    },
    setNotifications(state, notifications) {
      state.notifications = notifications;
    },
  },

  actions: {
    fetchSalles({ commit }) {
      // Données simulées (plus tard remplacées par l’API)
      const salles = [
        { id: 1, nom: "Salle Alpha", capacite: 10, equipements: "Projecteur" },
        { id: 2, nom: "Bureau Beta", capacite: 2, equipements: "Wi-Fi" },
      ];
      commit("setSalles", salles);
    },
  },
});
