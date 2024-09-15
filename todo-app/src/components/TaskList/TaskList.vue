<template>
  <!-- creating unordered list that renders every task-item indivudually - using a for loop to loop through -->
  <ul class="divide-y divide-gray-200 mt-4">
    <task-item v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from "../TaskItem/TaskItem.vue";

export default {
  components: { TaskItem },
  computed: {
    //return the array of tasks from the Veux store
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>
