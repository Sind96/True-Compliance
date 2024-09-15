import { createStore } from "vuex";

export const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    toggleTaskCompletion(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      task.completed = !task.completed;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    clearCompletedTasks(state) {
      state.tasks = state.tasks.filter((t) => !t.completed);
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    saveTasks({ state }) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    loadTasks({ commit }) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      commit("setTasks", tasks);
    },
  },
});
