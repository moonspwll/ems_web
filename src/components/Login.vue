<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();

const user = computed(() => authStore.user);

const CLIENT_ID = '1287795834758500385';
const REDIRECT_URI = 'http://localhost:5173/auth';
const loginUrl = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth&scope=identify`;

const login = () => {
  window.location.href = loginUrl;
};
</script>

<template>
  <div>
    <button
          v-if="!user"
          @click="login"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 ease-in-out"
        >
        🔑 Увійти через Discord
        </button>
  </div>
</template>
