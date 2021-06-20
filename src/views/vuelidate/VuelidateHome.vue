<template>
  <div class="grid">
    <router-link to="/vuelidate/basic">Basic</router-link>
    <router-link to="/vuelidate/custom">Custom Validation</router-link>
    <router-link to="/vuelidate/cross-field"
      >Cross-field Validation</router-link
    >
    <router-link to="/vuelidate/dynamic">Dynamic Validation</router-link>
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