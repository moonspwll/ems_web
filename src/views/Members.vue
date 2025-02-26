<template>
    <div class="w-4/5 mx-auto overflow-x-auto">
        <h1 class="m-2 text-black">Учасники діскорд серверу</h1>
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th>Нікнейм</th>
                    <th>№</th>
                    <th>Ролі</th>
                    <th>Статичний Айді</th>
                    <th>Ранг</th>
                    <th>Активний</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members" :key="member.id">
                    <td class="text-black">{{ member.display_name }}</td>
                    <td class="text-black">{{ member.user_id }}</td>
                    <td class="text-black">{{ member.roles }}</td>
                    <td class="text-black">{{ member.static_id }}</td>
                    <td class="text-black">{{ member.rank }}</td>
                    <td class="text-black">{{ +member.active ? 'Так' : 'Ні' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const members = ref([]);

// Витяжка усіх учасників серверу з user_management
const fetchMembers = async () => {
    const GUILD_ID = '1081256011953881178';
    try {
        const response = await fetch('http://localhost:5000/api/user/get-all-users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
            credentials: 'include', // Передаємо куки
        });
        members.value = await response.json();
    } catch (error) {
        console.error('Error fetching members:', error);
    }
};

onMounted(() => {
    fetchMembers();
});
</script>

<style scoped>
/* table {
    width: 100%;
    border-collapse: collapse;
} */

th, td {
    border: 1px solid #222222;
    padding: 2px;
}

th {
    background-color: #5e5e5e;
}
</style>