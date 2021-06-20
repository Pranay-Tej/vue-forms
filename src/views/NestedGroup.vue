<template>
  <div>
    <form @submit.prevent="print">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="email" />
      <div>
        <h3>Address</h3>
        <label for="street">Street</label>
        <input type="text" name="street" id="street" v-model="address.street" />
        <label for="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          v-model="address.pincode"
        />
      </div>
      <button type="submit">Print</button>
      Form:{ email: {{ email }}
      {{ address }}
      }
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
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
    return {
      ...toRefs(formValues),
      print,
    };
  },
};
</script>

<style>
</style>