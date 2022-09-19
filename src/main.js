import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";

configure({
  validateOnInput: true,
});

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

createApp(App).use(router).mount("#app");
