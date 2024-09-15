<!-- Create the title, input, v-model to bind the input value to newTask and @keyup.enter to use enter tab to trigger the addTask method -->
<template>
  <p class="text-3xl font-bold mb-4 w-100 text-center text-blue-600">
    ToDo List
  </p>
  <input
    type="text"
    v-model="newTask"
    placeholder="Add a new task"
    @keyup.enter="addTask"
    class="w-full p-2 border border-gray-300 rounded-md"
  />
</template>

<script>
export default {
  data() {
    return { newTask: "" };
  },
  methods: {
    //addTask method to add the task to store and using trim to ensure no whitespace.
    addTask() {
      if (this.newTask.trim()) {
        this.$store.commit("addTask", {
          //using Dat.now() as the unique id and completed as false to begin with as default value
          id: Date.now(),
          text: this.newTask,
          completed: false,
        });
        //clearing after adding the task and dispatching saveTasks action to save the tasks to localStorage
        this.newTask = "";
        this.$store.dispatch("saveTasks");
      }
    },
  },
};
</script>
