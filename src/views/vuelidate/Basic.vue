<template>
  <div>
    <form @submit.prevent="print">
      <label for="firstname">First Name</label>
      <input
        type="text"
        name="firstname"
        v-model="firstName"
        @blur="v$.firstName.$touch"
      />
      <span v-for="error in v$.firstName.$errors" :key="error">
        {{ error.$message }}
      </span>
      <label for="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        v-model="lastName"
        @blur="v$.lastName.$touch"
      />
      <span v-for="error in v$.lastName.$errors" :key="error">
        {{ error.$message }}
      </span>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="contact.email"
        @blur="v$.contact.email.$touch"
      />
      <span v-for="error in v$.contact.email.$errors" :key="error">
        {{ error.$message }}
      </span>
      <button type="submit">Print</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      contact: {
        email: "",
      },
    });
    const rules = {
      firstName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(6),
        $autoDirty: true,
      }, // Matches state.firstName
      lastName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(6),
        $autoDirty: true,
      }, // Matches state.lastName
      contact: {
        email: {
          required,
          email,
          $autoDirty: true,
        }, // Matches state.contact.email
      },
    };

    const v$ = useVuelidate(rules, state);

    function print() {
      // v$.value.$touch();
      v$.value.$validate();
      console.log(state);
      console.log(v$.value);
    }

    return { ...toRefs(state), v$, print };
  },
};
</script>

<style>
</style>