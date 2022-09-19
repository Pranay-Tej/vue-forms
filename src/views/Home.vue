<template>
  <div class="grid">
    <router-link to="/text-input">Text Input</router-link>
    <router-link to="/number-input">Number Input</router-link>
    <router-link to="/select">Select</router-link>
    <router-link to="/multi-select">Multi Select</router-link>
    <router-link to="/radio">Radio</router-link>
    <router-link to="/checkbox">Checkbox</router-link>
    <router-link to="/date">Date</router-link>
    <router-link to="/form-array">Form Array</router-link>
    <router-link to="/dynamic-form-array">Dynamic Form Array</router-link>
    <router-link to="/nested-group">Nested Group</router-link>
    <router-link to="/array-of-groups">Array of Groups</router-link>
    <router-link to="/api-populate">API Populate</router-link>
    <hr />
    <router-link to="/vuelidate">Vuelidate Validations</router-link>
    <!-- <router-link to="/form-field">Vee Validate Form Field</router-link> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.grid {
  display: grid;
  gap: 1em;
}
</style>
