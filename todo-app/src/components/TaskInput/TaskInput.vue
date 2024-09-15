<template>
  <input
    type="text"
    v-model="newTask"
    placeholder="Add a new task"
    @keyup.enter="addTask"
    class="input"
  />
</template>

<script>
export default {
  data() {
    return { newTask: "" };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$store.commit("addTask", {
          id: Date.now(),
          text: this.newTask,
          completed: false,
        });
        this.newTask = "";
        this.$store.dispatch("saveTasks");
      }
    },
  },
};
</script>
