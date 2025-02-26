<script setup>
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="flex items-center justify-center" v-if="authStore.user">
    <img class="mr-4 rounded-full" :src="`https://cdn.discordapp.com/avatars/${authStore.user.user.id}/${authStore.user.user.avatar}.png`" width="50">
    <p class="font-semibold text-center fs-800 text-black">{{ authStore.user.nick }}</p>
  </div>
</template>
