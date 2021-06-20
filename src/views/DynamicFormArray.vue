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
        <button @click="removeEmailField(i)" type="button">X</button>
      </template>
      <button @click="addEmailField" type="button">Add Email</button>
      <button type="submit">Print</button>
      {{ emails }}
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const emails = ref([]);

    function addEmailField() {
      emails.value = emails.value.concat([""]);
    }

    function removeEmailField(i) {
      emails.value = emails.value.filter((val, index) => i !== index);
    }

    function print() {
      console.log({ emails: emails.value });
    }

    return {
      emails,
      addEmailField,
      removeEmailField,
      print,
    };
  },
};
</script>

<style>
</style>