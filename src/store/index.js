import { createStore } from "vuex";
import todo from "./todo/todo-store";

const state = {};

const mutations = {};

const actions = {};

const store = createStore({
  state,
  mutations,
  actions,
  modules: {
    todo,
  },
});

export default store;
