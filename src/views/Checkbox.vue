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
      {{ selectedPlan }}
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const selectedPlan = ref([]);
    const planList = ref(["Free", "Team", "Enterprise"]);

    function print() {
      console.log({ selectedPlan: selectedPlan.value });
    }
    return {
      selectedPlan,
      planList,
      print,
    };
  },
};
</script>

<style>
</style>