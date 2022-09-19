<template>
  <div>
    <form @submit.prevent="print">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="email" />
      <button type="submit">Print</button>
      {{ email }}
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

function print() {
  console.log({ email: email.value });
}
</script>

<style></style>
