import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const response = await fetch('http://localhost:5000/api/user/get-user-discord', {
        credentials: 'include', // Передаємо куки
      });

      if (response.ok) {
        this.user = await response.json();
      } else {
        this.user = null;
      }
    },

    logout() {
      document.cookie = "discord_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.user = null;
    }
  }
});
