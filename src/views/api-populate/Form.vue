<template>
  <router-link to="/api-populate">Back</router-link>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">Error: {{ error.message }}</div>
  <div>
    <div v-if="!isLoading">
      <form @submit.prevent="save">
        <label for="user">User:</label>
        <select name="user" id="user" v-model="itRequest.user">
          <option v-for="user in userList" :value="user" :key="user">
            {{ user }}
          </option>
        </select>

        <hr />
        <label for="reason">Reason:</label>
        <select name="reason" id="reason" v-model="itRequest.reason">
          <option v-for="reason in reasonList" :value="reason" :key="reason">
            {{ reason }}
          </option>
        </select>

        <label for="otherReason">otherReason</label>
        <input
          type="text"
          name="otherReason"
          id="otherReason"
          v-model="itRequest.otherReason"
          ref="otherReasonRef"
        />

        <hr />
        <!-- Laptop -->
        <label for="brand">brand:</label>
        <select name="brand" id="brand" v-model="itRequest.brand">
          <option v-for="brand in brandList" :value="brand" :key="brand">
            {{ brand }}
          </option>
        </select>

        <label for="model">model:</label>
        <select name="model" id="model" v-model="itRequest.model">
          <option
            v-for="availableModel in modelList"
            :value="availableModel.model"
            :key="availableModel"
          >
            {{ availableModel.model }}
          </option>
        </select>

        <hr />
        <!-- OS -->
        Choose a OS:
        <template v-for="availableOs in osList" :key="availableOs">
          <label :for="availableOs">{{ availableOs }}</label>
          <input
            type="radio"
            name="availableOs"
            :value="availableOs"
            v-model="itRequest.os"
          />
        </template>

        <hr />
        <!-- Software -->
        Choose plans:
        <template
          v-for="availableSoftware in softwareList"
          :key="availableSoftware"
        >
          <label :for="availableSoftware">{{ availableSoftware }}</label>
          <input
            type="checkbox"
            :name="availableSoftware"
            :value="availableSoftware"
            v-model="itRequest.software"
          />
        </template>

        <hr />
        <template
          v-for="(otherSoftwareItem, i) in itRequest.otherSoftware"
          :key="i"
        >
          <label :for="`otherSoftwareItem${i}`">otherSoftwareItem{{ i }}</label>
          <input
            type="text"
            :name="`otherSoftwareItem${i}`"
            :id="`otherSoftwareItem${i}`"
            v-model="itRequest.otherSoftware[i]"
          />
          <button @click="removeOtherSoftware(i)" type="button">X</button>
        </template>
        <button @click="addOtherSoftware" type="button">Add Software</button>
        <button type="submit">Print</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import useAxios from "../../composables/useAxios.js";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, toRef, toRefs, watch } from "vue";

const router = useRouter();
const route = useRoute();
const itRequest = reactive({
  user: "",
  reason: "",
  otherReason: "",
  brand: "",
  model: "",
  os: "",
  software: [],
  otherSoftware: [],
});
const { data, error, isLoading, execute } = useAxios(
  `https://buttery-purple-calcium.glitch.me/it-requests/${route.params.id}`
);
async function fetchItRequest() {
  await execute();
  console.log(data);
  itRequest.user = data.value.user;
  itRequest.reason = data.value.reason;
  itRequest.otherReason = data.value.otherReason;
  itRequest.brand = data.value.brand;
  itRequest.model = data.value.model;
  itRequest.os = data.value.os;
  itRequest.software = data.value.software;
  itRequest.otherSoftware = data.value.otherSoftware;
}
if (route.params.id !== "new") {
  fetchItRequest();
}

const userList = ["John", "Drake", "Tina"];
const reasonList = ["Project", "On Site", "Other"];
const brandList = ["Apple", "Acer"];
const modelList = ref([]);
const osList = ["Windows", "Mac", "Linux"];
const softwareList = ["Postman", "Node JS", "VS Code"];

const otherReasonRef = ref(null);
watch(
  () => itRequest.reason,
  (value) => {
    if (value !== "Other") {
      otherReasonRef.value.disabled = true;
    } else {
      otherReasonRef.value.disabled = false;
    }
  }
);

watch(
  () => itRequest.brand,
  async (value, oldValue) => {
    const {
      data: models,
      error: modelError,
      execute: fetchModels,
    } = useAxios(
      `https://buttery-purple-calcium.glitch.me/laptops?brand=${value}`
    );
    // do not reset on page load
    if (oldValue !== "" && value !== "") {
      // reset
      itRequest.model = "";
      modelList.value = [];
    }
    if (value) {
      await fetchModels();
      console.log(models.value);
      if (!modelError.value) {
        modelList.value = models.value;
      }
    }
  }
);

const itRequestRef = toRef(itRequest, "otherSoftware");

function addOtherSoftware() {
  itRequestRef.value = itRequestRef.value.concat([""]);
}

function removeOtherSoftware(i) {
  itRequestRef.value = itRequestRef.value.filter((val, index) => i !== index);
}

async function save() {
  console.log({ ...itRequest });
  if (route.params.id === "new") {
    const { error: saveError, execute: create } = useAxios(
      `https://buttery-purple-calcium.glitch.me/it-requests`,
      {
        method: "POST",
        data: { ...itRequest },
      }
    );
    await create();
    console.log({ saveError });
    if (!saveError.value) {
      router.push("/api-populate");
    }
  } else {
    const { error: updateError, execute: update } = useAxios(
      `https://buttery-purple-calcium.glitch.me/it-requests/${route.params.id}`,
      {
        method: "PUT",
        data: { ...itRequest },
      }
    );
    await update();
    console.log({ updateError });
    if (!updateError.value) {
      router.push("/api-populate");
    }
  }
}
</script>

<style></style>
