<template>
  <div>
    <form @submit.prevent="print">
      <label for="minLength">Minimum Length</label>
      <input
        type="number"
        name="minLength"
        v-model="minLength"
        @blur="v$.minLength.$touch"
      />
      <span v-for="error in v$.minLength.$errors" :key="error">
        {{ error.$message }}
      </span>
      <label for="maxLength">Maximum Length</label>
      <input
        type="number"
        name="maxLength"
        v-model="maxLength"
        @blur="v$.maxLength.$touch"
      />
      <span v-for="error in v$.maxLength.$errors" :key="error">
        {{ error.$message }}
      </span>
      <label for="username">Confirm Password</label>
      <input
        type="text"
        name="username"
        v-model="username"
        @blur="v$.username.$touch"
      />
      <span v-for="error in v$.username.$errors" :key="error">
        {{ error.$message }}
      </span>
      <button type="submit">Print</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import { required, numeric, minLength, maxLength } from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      username: "",
      minLength: 3,
      maxLength: 6,
    });
    const rules = {
      minLength: {
        required,
        numeric,
      },
      maxLength: {
        required,
        numeric,
      },
      username: {
        required,
        minLength: minLength(toRef(state, "minLength")),
        maxLength: maxLength(toRef(state, "maxLength")),
        $autoDirty: true,
      }, // Matches state.username
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