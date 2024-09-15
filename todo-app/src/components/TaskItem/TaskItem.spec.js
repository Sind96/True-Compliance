import { mount } from "@vue/test-utils";
import TaskItem from "../TaskItem/TaskItem.vue";
import { store } from "../../store";

describe("TaskList.vue", () => {
  //checking to see if a task is deleted using mock data: id, text, completion
  it("deletes a task", async () => {
    const task = { id: 1, text: "Test Task", completed: false };
    const wrapper = mount(TaskItem, {
      props: { task },
      global: {
        plugins: [store],
      },
    });

    //simulating a click event to trigger the deletion of the task
    const deleteButton = wrapper.find("button");
    await deleteButton.trigger("click");
    //task is no longer in the stores tasks array after deletion
    expect(store.state.tasks).not.toContain(task);
  });
});
