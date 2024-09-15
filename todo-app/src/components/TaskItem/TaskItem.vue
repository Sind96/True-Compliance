<template>
  <li
    :class="{
      'line-through text-gray-500': task.completed,
      'flex items-center justify-between p-2 border-b border-gray-200': true,
    }"
  >
    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="toggleCompletion"
        class="form-checkbox h-5 w-5 text-blue-600"
      />
      <span class="text-lg">{{ task.text }}</span>
    </div>
    <button
      @click="deleteTask"
      class="text-red-500 hover:text-red-700 font-semibold"
    >
      Delete
    </button>
  </li>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    toggleCompletion() {
      this.$store.commit("toggleTaskCompletion", this.task.id);
      this.$store.dispatch("saveTasks");
    },
    deleteTask() {
      this.$store.commit("deleteTask", this.task.id);
      this.$store.dispatch("saveTasks");
    },
  },
};
</script>
