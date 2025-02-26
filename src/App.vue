<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import { useAuthStore } from './store/auth';

const authStore = useAuthStore();

const processCallback = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    await fetch('http://localhost:5000/api/auth/discord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
      credentials: 'include', // Передаємо куки
    });

    window.location.href = '/';
  }
  await authStore.fetchUser();
};

onMounted(() => {
  processCallback();
});
</script>
<template>
  <Header />
  <router-view />
</template>

<style scoped>
</style>
