<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import TaskInput from "./components/TaskInput/TaskInput.vue";
import TaskList from "./components/TaskList/TaskList.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("loadTasks");
});
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="bg-white rounded p-4 max-w-lg mx-auto">
      <TaskInput />
      <TaskList />
      <button
        @click="clearCompleted"
        class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Clear Completed Tasks
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearCompleted() {
      this.$store.commit("clearCompletedTasks");
      this.$store.dispatch("saveTasks");
    },
  },
};
</script>
