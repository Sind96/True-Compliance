<template>
  <ul class="divide-y divide-gray-200 mt-4">
    <task-item v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from "../TaskItem/TaskItem.vue";

export default {
  components: { TaskItem },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>
