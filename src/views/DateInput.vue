<template>
  <div>
    <form @submit.prevent="print">
      <label for="date">Date</label>
      <input type="date" name="date" id="date" v-model="date" />
      <button type="submit">Print</button>
      {{ date }}
      formatted: {{ formattedDate }}
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { parse, format } from "date-fns";

const date = ref("");
const formattedDate = computed(() =>
  date.value === ""
    ? date.value
    : format(parse(date.value, "yyyy-MM-dd", new Date()), "dd.MM.yyyy")
);
console.log(parse("2021-06-19", "yyyy-MM-dd", new Date()));
console.log(format(new Date("2021-06-19"), "dd.MM.yyyy"));

function print() {
  console.log({ date: formattedDate.value });
}
</script>

<style></style>
