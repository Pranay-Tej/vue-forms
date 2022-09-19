<template>
  <div>
    <form @submit.prevent="print">
      Choose plans:
      <template v-for="plan in planList" :key="plan">
        <label :for="plan">{{ plan }}</label>
        <input
          type="checkbox"
          :name="plan"
          :value="plan"
          v-model="selectedPlan"
        />
      </template>

      <button type="submit">Print</button>
      <p v-for="plan in selectedPlan">
        {{ plan }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedPlan = ref([]);
const planList = ref(["Free", "Team", "Enterprise"]);

function print() {
  console.log({ selectedPlan: selectedPlan.value });
}
</script>

<style></style>
