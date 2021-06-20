<template>
  <div>
    <button @click="back">Back</button>
    <div>{{ isLoading }}</div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="todo">{{ todo.title }}</div>
    <form @submit="save">
      <!-- Some fields -->
      <label for="title">Todo</label>
      <input
        name="title"
        v-model="titleField.value"
        type="text"
        @input="titleField.handleChange"
        @blur="titleField.handleBlur"
      />
      <span>{{ titleField.errorMessage }}</span>
      <button type="submit">Save</button>
      <button type="button" @click="back" v-if="todo?.id">Cancel</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, watch, toRefs, onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import { todoListLoad$, todoListError$ } from "../../store/todo/todo-loading";
import { Subscription } from "rxjs";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const todo = computed(() => store.state.todo.selectedTodo);

    const isLoading = ref(false);
    const error = ref("");

    store.commit("setSelectedTodo", null);
    if (route.params.id !== "new") {
      store.dispatch("fetchTodoById", {
        id: route.params.id,
      });
    }
    const subscriptions = new Subscription();
    subscriptions.add(
      todoListLoad$.subscribe((loadStatus) => {
        isLoading.value = loadStatus;
      })
    );
    subscriptions.add(todoListError$.subscribe((e) => (error.value = e)));

    // Initial values
    const formValues = {
      title: "",
    };
    const { setFieldValue, setValues, handleSubmit, resetForm } = useForm({
      initialValues: formValues,
    });

    const titleField = reactive(useField("title"));

    // setFieldValue('fieldName', 'newValue');
    // setValues({
    //   fieldName: 'newValue',
    // });
    watch(
      () => store.state.todo.selectedTodo,
      (value) => {
        setValues({
          title: value.title,
        });
      }
    );

    function back() {
      // resetForm();
      router.push("/vuex-todo");
    }

    const save = handleSubmit(async (values) => {
      console.log(todo.value?.id, values);
      if (todo.value?.id) {
        await store.dispatch("updateTodo", {
          id: todo.value.id,
          todo: {
            ...values,
          },
        });
      } else {
        await store.dispatch("createTodo", {
          ...values,
        });
      }
      back();
    });

    onBeforeUnmount(() => {
      // unsubscribe to ensure no memory leaks
      subscriptions.unsubscribe();
    });

    return {
      todo,
      titleField,
      back,
      save,
      isLoading,
      error,
    };
  },
};
</script>

<style>
</style>