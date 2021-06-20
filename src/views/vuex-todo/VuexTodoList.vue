<template>
  <div>
    <router-link to="/vuex-todo/new">New</router-link>

    <h2>Vuex fetch</h2>
    <p>{{ listLoading }}</p>
    <p v-if="listLoading">Loading...</p>
    <p v-if="listError">Error</p>
    <p v-if="listError">{{ listError }}</p>
    <ul v-if="todoList?.length > 0">
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.title }}
        <button @click="viewTodo(todo.id)">E</button>
      </li>
    </ul>

    <h2>In-Component fetch</h2>
    <div>
      <p v-if="isLoading">Loading...</p>
      <p v-if="error">Error</p>
      <p v-if="error">{{ error }}</p>
      <ul>
        <li v-for="item in data" :key="item.id">
          {{ item.title }}
          <button @click="viewTodo(item.id)">E</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useAxios from "../../composables/useAxios";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    let localState = reactive({
      listLoading: false,
      listError: null,
    });

    store.dispatch("fetchTodoList", toRefs(localState));

    function viewTodo(id) {
      router.push(`/vuex-todo/${id}`);
    }

    // In-Component fetch
    const { data, isLoading, error, execute } = useAxios(
      `https://buttery-purple-calcium.glitch.me/todos`
    );
    execute();

    return {
      data,
      isLoading,
      error,
      todoList: computed(() => store.state.todo.todoList),
      viewTodo,
      ...toRefs(localState),
    };
  },
};
</script>

<style>
</style>