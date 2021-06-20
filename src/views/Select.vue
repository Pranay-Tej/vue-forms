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

<script>
import { ref } from "vue";
export default {
  setup() {
    const car = ref();
    const carList = ref(["Lamborghini", "BMW", "Benz", "Audi"]);

    function print() {
      console.log({ car: car.value });
    }
    return {
      car,
      carList,
      print,
    };
  },
};
</script>

<style>
</style>