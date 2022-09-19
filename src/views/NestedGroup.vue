<template>
  <div>
    <form @submit.prevent="print">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="formValues.email" />
      <div>
        <h3>Address</h3>
        <label for="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          v-model="formValues.address.street"
        />
        <label for="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          v-model="formValues.address.pincode"
        />
      </div>
      <button type="submit">Print</button>
      Form:{ email: {{ formValues.email }}
      {{ formValues.address }}
      }
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formValues = reactive({
  email: "",
  address: {
    street: "",
    pincode: "",
  },
});

function print() {
  console.log({ ...formValues });
}
</script>

<style></style>
