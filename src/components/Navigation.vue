<template>
    <nav class="p-4">
        <ul>
            <li><router-link to="/">Головна</router-link></li>
            <li v-if="isLogined"><router-link to="/medical-staff">Учасники</router-link></li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({
    isLogined: Boolean,
});
</script>

<style scoped>
nav {
    /* background-color: #333; */
    padding: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: inline;
    margin-right: 1rem;
}

a {
    color: rgb(29, 14, 95);
    text-decoration: none;
    font-size: 20px;
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}
</style>