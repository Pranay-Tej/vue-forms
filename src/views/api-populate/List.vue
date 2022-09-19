<template>
  <router-link to="/api-populate/new">New</router-link>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">Error: {{ error.message }}</div>
  <div v-if="!error">
    <ul v-if="data">
      <li v-for="dataitem in data" :key="dataitem.id">
        {{ dataitem.brand }}
        {{ dataitem.id }}
        {{ dataitem.user }}
        <button @click="viewItRequest(dataitem.id)">E</button>
        <button @click="deleteItRequest(dataitem.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import useAxios from "../../composables/useAxios.js";
import { useRouter } from "vue-router";
const {
  data,
  error,
  isLoading,
  execute: fetchList,
} = useAxios(`https://buttery-purple-calcium.glitch.me/it-requests`);
fetchList();

const router = useRouter();

// async function fetchItRequests(){
//   await execute()
// }

// fetchItRequests()

function viewItRequest(id) {
  router.push(`/api-populate/${id}`);
}

async function deleteItRequest(id) {
  const {
    data,
    error,
    isLoading,
    execute: deleteIt,
  } = useAxios(`https://buttery-purple-calcium.glitch.me/it-requests/${id}`, {
    method: "DELETE",
  });
  await deleteIt();
  fetchList();
}
</script>

<style></style>
