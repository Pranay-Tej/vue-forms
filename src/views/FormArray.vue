<template>
  <div>
    <form @submit.prevent="print">
      <template v-for="(email, i) in emails" :key="i">
        <label :for="`email${i}`">Email{{ i }}</label>
        <input
          type="text"
          :name="`email${i}`"
          :id="`email${i}`"
          v-model="emails[i]"
        />
      </template>
      <button type="submit">Print</button>
      {{ emails }}
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emails = ref(["a@b.com", "c@d.com", "e@f.com"]);

function print() {
  console.log({ emails: emails.value });
}
</script>

<style></style>
