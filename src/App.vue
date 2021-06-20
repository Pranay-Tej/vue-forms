<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

html,
body {
  width: 100%;
  height: 100%;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.RuleSelector {
  margin-bottom: 60px;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input,
select {
  border-radius: 5px;
  border: 2px solid hsla(0, 0%, 0%, 0.5);
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

select + label {
  margin-top: 20px;
}

input:focus {
  border-color: var(--primary-color);
}

input + span {
  color: var(--error-color);
  font-size: 14px;
}
</style>
