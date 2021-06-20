<template>
  <div>
    <form @submit.prevent="print">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="email"
        @blur="v$.email.$touch"
      />
      <span v-for="error in v$.email.$errors" :key="error">
        {{ error.$message }}
      </span>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        v-model="password"
        @blur="v$.password.$touch"
      />
      <span v-for="error in v$.password.$errors" :key="error">
        {{ error.$message }}
      </span>
      <button type="submit">Print</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    // custom validator function
    function validPassword(value) {
      return RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/
      ).test(value);
    }

    const rules = {
      email: {
        required,
        org: helpers.withMessage(
          "Must end with @vue.com",
          helpers.regex(/^[A-Za-z0-9._%+-]+@vue.com$/)
        ),
        email,
        $autoDirty: true,
      },
      password: {
        required,
        validPassword: helpers.withMessage(
          "Must contain at least Smaller Upper case Alphabet Number Symbol",
          validPassword
        ),
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