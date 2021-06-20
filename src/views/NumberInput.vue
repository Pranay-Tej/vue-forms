<template>
  <div>
    <form @submit.prevent="print">
      <label for="amount">Amount</label>
      <input type="number" name="amount" id="amount" v-model.number="amount" />
      <button type="submit">Print</button>
      {{ amount }}
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const amount = ref();

    function print() {
      console.log({ amount: amount.value });
    }
    return {
      amount,
      print,
    };
  },
};
</script>

<style>
</style>