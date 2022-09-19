<template>
  <div>
    <form @submit.prevent="print">
      <label for="cars">Choose a car:</label>

      <select name="cars" id="cars" v-model="car">
        <option v-for="car in carList" :value="car" :key="car">
          {{ car }}
        </option>
      </select>
      <button type="submit">Print</button>
      {{ car }}
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const car = ref();
const carList = ref(["Lamborghini", "BMW", "Benz", "Audi"]);

function print() {
  console.log({ car: car.value });
}
</script>

<style></style>
