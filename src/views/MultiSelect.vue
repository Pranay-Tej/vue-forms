<template>
  <div>
    <form @submit.prevent="print">
      <label for="cars">Choose a car:</label>

      <select name="cars" id="cars" multiple="true" v-model="selectedCars">
        <option v-for="car in carList" :value="car" :key="car">
          {{ car }}
        </option>
      </select>
      <button type="submit">Print</button>
      {{ selectedCars }}
    </form>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      selectedCars: [],
    });
    const carList = ref(["Lamborghini", "BMW", "Benz", "Audi"]);

    function print() {
      console.log(state.selectedCars);
    }
    return {
      ...toRefs(state),
      carList,
      print,
    };
  },
};
</script>

<style>
</style>