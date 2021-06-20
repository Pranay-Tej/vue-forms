import axios from "axios";
import useAxios from "../../composables/useAxios";
import { setTodoListError, setTodoListLoad } from "./todo-loading";

const BASE_URL = "https://buttery-purple-calcium.glitch.me";

const state = {
  todoList: [],
  selectedTodo: null,
};

const mutations = {
  setTodoList(state, todoList) {
    state.todoList = todoList;
  },
  setSelectedTodo(state, todo) {
    state.selectedTodo = todo;
  },
};

const actions = {
  async fetchTodoList(context, payload) {
    // axios
    //   .get(`${BASE_URL}/todos`)
    //   .then((response) => context.commit("setTodoList", response.data))
    //   .catch((e) => console.error(e));
    context.commit("setTodoList", []);
    const { data, isLoading, error, execute } = useAxios(`${BASE_URL}/todos`);
    payload.listLoading.value = isLoading;
    payload.listError.value = error;
    await execute();
    // console.log(payload);
    if (!error.value) {
      context.commit("setTodoList", data);
    }
  },
  async fetchTodoById(context, payload) {
    // axios
    //   .get(`${BASE_URL}/todos/${id}`)
    //   .then((response) => context.commit("setSelectedTodo", response.data))
    //   .catch((e) => console.error(e));
    context.commit("setSelectedTodo", null);
    const { data, isLoading, error, execute } = useAxios(
      `${BASE_URL}/todos/${payload.id}`
    );
    // payload.isLoading.value = isLoading;
    // payload.error.value = error;
    setTodoListLoad(true);
    await execute();
    if (!error.value) {
      context.commit("setSelectedTodo", data);
    }
    setTodoListLoad(false);
    setTodoListError(error.value);
  },
  async createTodo(context, todo) {
    // axios
    //   .post(`${BASE_URL}/todos`, todo)
    //   .then((response) => {
    //     console.log(response?.data);
    //     // context.commit("setSelectedTodo", response.data)
    //     context.dispatch("fetchTodoList");
    //   })
    //   .catch((e) => console.error(e));
    const { data, error, execute } = useAxios(`${BASE_URL}/todos`, {
      method: "POST",
      data: todo,
    });
    await execute();
    if (!error.value) {
      // context.dispatch("fetchTodoList");
    }
  },
  async updateTodo(context, payload) {
    // axios
    //   .put(`${BASE_URL}/todos/${payload.id}`, payload.todo)
    //   .then((response) => {
    //     console.log(response?.data);
    //     // context.commit("setSelectedTodo", response.data)
    //     context.dispatch("fetchTodoList");
    //   })
    //   .catch((e) => console.error(e));
    const { data, error, execute } = useAxios(
      `${BASE_URL}/todos/${payload.id}`,
      {
        method: "PUT",
        data: payload.todo,
      }
    );
    await execute();
    if (!error.value) {
      // context.dispatch("fetchTodoList");
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
