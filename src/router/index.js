import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FormField from "../views/vee-validate/FormField.vue";
import VuexTodo from "../views/vuex-todo/VuexTodo.vue";
import VuexTodoList from "../views/vuex-todo/VuexTodoList.vue";
import VuexTodoDetail from "../views/vuex-todo/VuexTodoDetail.vue";
import TextInput from "../views/TextInput.vue";
import NumberInput from "../views/NumberInput.vue";
import Select from "../views/Select.vue";
import MultiSelect from "../views/MultiSelect.vue";
import Radio from "../views/Radio.vue";
import Checkbox from "../views/Checkbox.vue";
import DateInput from "../views/DateInput.vue";
import FormArray from "../views/FormArray.vue";
import DynamicFormArray from "../views/DynamicFormArray.vue";
import NestedGroup from "../views/NestedGroup.vue";
import ArrayOfGroups from "../views/ArrayOfGroups.vue";
import ApiPopulate from "../views/api-populate/ApiPopulate.vue";
import List from "../views/api-populate/List.vue";
import Form from "../views/api-populate/Form.vue";

import Vuelidate from "../views/vuelidate/Vuelidate.vue";
import VuelidateHome from "../views/vuelidate/VuelidateHome.vue";
import Basic from "../views/vuelidate/Basic.vue";
import CustomValidation from "../views/vuelidate/CustomValidation.vue";
import CrossFieldValidation from "../views/vuelidate/CrossFieldValidation.vue";
import DynamicValidation from "../views/vuelidate/DynamicValidation.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/text-input",
    component: TextInput,
  },
  {
    path: "/number-input",
    component: NumberInput,
  },
  {
    path: "/select",
    component: Select,
  },
  {
    path: "/multi-select",
    component: MultiSelect,
  },
  {
    path: "/radio",
    component: Radio,
  },
  {
    path: "/checkbox",
    component: Checkbox,
  },
  {
    path: "/date",
    component: DateInput,
  },
  {
    path: "/form-array",
    component: FormArray,
  },
  {
    path: "/dynamic-form-array",
    component: DynamicFormArray,
  },
  {
    path: "/nested-group",
    component: NestedGroup,
  },
  {
    path: "/array-of-groups",
    component: ArrayOfGroups,
  },
  {
    path: "/form-field",
    component: FormField,
  },
  {
    path: "/api-populate",
    component: ApiPopulate,
    children: [
      {
        path: "",
        component: List,
      },
      {
        path: ":id",
        component: Form,
      },
    ],
  },
  {
    path: "/vuelidate",
    component: Vuelidate,
    children: [
      {
        path: "",
        component: VuelidateHome,
      },
      {
        path: "basic",
        component: Basic,
      },
      {
        path: "custom",
        component: CustomValidation,
      },
      {
        path: "cross-field",
        component: CrossFieldValidation,
      },
      {
        path: "dynamic",
        component: DynamicValidation,
      },
    ],
  },
  {
    path: "/vuex-todo",
    component: VuexTodo,
    children: [
      {
        path: "",
        component: VuexTodoList,
      },
      {
        path: ":id",
        component: VuexTodoDetail,
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
