import axios from "axios";
import { reactive, toRefs } from "vue";

export default function (url, options = null) {
  const state = reactive({
    data: null,
    error: null,
    isLoading: false,
  });

  const execute = async () => {
    state.isLoading = true;
    try {
      const response = await axios(url, options);
      state.data = response.data;
    } catch (error) {
      console.error(error);
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return {
    ...toRefs(state),
    execute,
  };
}
