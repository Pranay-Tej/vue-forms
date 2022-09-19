<template>
  <div>
    <form @submit.prevent="print">
      <label for="cars">Choose a car:</label>

      <select
        name="cars"
        id="cars"
        multiple="true"
        v-model="state.selectedCars"
      >
        <option v-for="car in carList" :value="car" :key="car">
          {{ car }}
        </option>
      </select>
      <button type="submit">Print</button>

      <p v-for="car in state.selectedCars">
        {{ car }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  selectedCars: [],
});
const carList = ref(["Lamborghini", "BMW", "Benz", "Audi"]);

function print() {
  console.log(state.selectedCars);
}
</script>

<style></style>
