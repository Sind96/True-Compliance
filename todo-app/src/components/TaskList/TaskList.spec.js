import { mount } from "@vue/test-utils";
import TaskList from "./TaskList.vue";
import TaskItem from "../TaskItem/TaskItem.vue";
import { store } from "../../store";

describe("TaskList.vue", () => {
  //checking to see if tasks are rendered correctly using mock data
  it("renders tasks", () => {
    store.commit("setTasks", [
      { id: 1, text: "Test Task 1", completed: false },
      { id: 2, text: "Test Task 2", completed: true },
    ]);

    const wrapper = mount(TaskList, {
      global: {
        plugins: [store],
      },
    });

    //the taskItem component should be within the taskList
    expect(wrapper.findAllComponents(TaskItem)).toHaveLength(2);
  });
});
