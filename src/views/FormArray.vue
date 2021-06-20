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
      </template>
      <button type="submit">Print</button>
      {{ emails }}
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const emails = ref(["a@b.com", "c@d.com", "e@f.com"]);

    function print() {
      console.log({ emails: emails.value });
    }

    return {
      emails,
      print,
    };
  },
};
</script>

<style>
</style>