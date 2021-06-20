<template>
  <div>
    <Form>
      <!-- composition API -->
      <label for="email">Email</label>
      <input name="email" v-model="emailValue" type="text" />
      <span>{{ emailError }}</span>
      <!-- composition API -->
      <label for="password">Password</label>
      <input
        name="password"
        v-model="passwordField.value"
        type="text"
        @input="passwordField.handleChange"
        @blur="passwordField.handleBlur"
      />
      <span>{{ passwordField.errorMessage }}</span>
      <!-- Field component -->
      <label for="input">Field</label>
      <Field name="input" :rules="{ email: true, required: true }" />

      <ErrorMessage name="input" />
    </Form>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import { reactive } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    function isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return "This is required";
    }

    const { errorMessage: emailError, value: emailValue } = useField(
      "email",
      isRequired
    );

    const passwordField = reactive(useField("password", isRequired));

    return {
      emailValue,
      emailError,
      passwordField,
    };
  },
};
</script>

<style>
</style>