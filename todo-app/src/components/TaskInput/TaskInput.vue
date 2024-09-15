<template>
  <input
    type="text"
    v-model="newTask"
    placeholder="Add a new task"
    @keyup.enter="addTask"
    class="input"
  />
</template>
