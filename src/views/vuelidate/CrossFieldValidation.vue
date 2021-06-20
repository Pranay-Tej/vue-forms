<template>
  <div>
    <form @submit.prevent="print">
      <label for="password">Password</label>
      <input
        type="text"
        name="password"
        v-model="password"
        @blur="v$.password.$touch"
      />
      <span v-for="error in v$.password.$errors" :key="error">
        {{ error.$message }}
      </span>
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="text"
        name="confirmPassword"
        v-model="confirmPassword"
        @blur="v$.confirmPassword.$touch"
      />
      <span v-for="error in v$.confirmPassword.$errors" :key="error">
        {{ error.$message }}
      </span>
      <button type="submit">Print</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import {
  required,
  sameAs,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      password: "",
      confirmPassword: "",
    });
    const rules = {
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(6),
        $autoDirty: true,
      }, // Matches state.password
      confirmPassword: {
        sameAsPassword: helpers.withMessage(
          "Passwords should match",
          // sameAs accepts a reference or static value like 'SomePassword'
          sameAs(toRef(state, "password"))
        ),
        $autoDirty: true,
      }, // Matches state.confirmPassword
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