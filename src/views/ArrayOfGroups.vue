<template>
  <div>
    <form @submit.prevent="print">
      <template v-for="(name, i) in names" :key="i">
        <label :for="`name${i}FirstName`">name{{ i }} FirstName</label>
        <input
          type="text"
          :name="`name${i}FirstName`"
          :id="`name${i}FirstName`"
          v-model="names[i].firstName"
        />
        <label :for="`name${i}LastName`">name{{ i }} LastName</label>
        <input
          type="text"
          :name="`name${i}LastName`"
          :id="`name${i}LastName`"
          v-model="names[i].lastName"
        />
        <br />
        <button @click="removeName(i)" type="button">X</button>
      </template>
      <button @click="addName" type="button">Add name</button>
      <button type="submit">Print</button>
      {{ names }}
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const names = ref([]);

    function addName() {
      names.value = names.value.concat([{ firstName: "", lastName: "" }]);
    }

    function removeName(i) {
      names.value = names.value.filter((val, index) => i !== index);
    }

    function print() {
      console.log({ names: names.value });
    }

    return {
      names,
      addName,
      removeName,
      print,
    };
  },
};
</script>

<style>
</style>