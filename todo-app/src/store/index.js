import { createStore } from "vuex";

//Creating a new Veux store to hold the tasks.
export const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    //Pushing new tasks into the task array .
    addTask(state, task) {
      if (!state.tasks) {
        state.tasks = [];
      }
      state.tasks.push(task);
    },
    //The task is toggled using the id - if the task exists then toggle it to completed.
    toggleTaskCompletion(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    //The task is deleted from the array using the id
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    // Remove all completed tasks from the array list using filter -  keep only tasks that are not completed yet.
    clearCompletedTasks(state) {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    // Setting the tasks array with a provided list of tasks - if no tasks are provided then declare it as an empyt array.
    setTasks(state, tasks) {
      state.tasks = tasks || [];
    },
  },
  actions: {
    // Saving the current array list to the localStorage
    saveTasks({ state }) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    // Loading the current array list from the localStorage and then using setTasks to commit it's state.
    loadTasks({ commit }) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      commit("setTasks", tasks);
    },
  },
});
