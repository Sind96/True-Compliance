import { mount } from "@vue/test-utils";
import TaskInput from "./TaskInput.vue";
import { store } from "../../store";

describe("TaskInput.vue", () => {
  // checking if a new task is added and the input field is cleared when submitted
  it("adds a new task and clears the input field", async () => {
    const wrapper = mount(TaskInput, {
      global: {
        plugins: [store],
      },
    });

    // finding input element and setting "New Task" into the input field before triggering the "keyup.enter" - we can expect the task to match "New Task"
    const input = wrapper.find("input");
    await input.setValue("New Task");
    await input.trigger("keyup.enter");

    expect(store.state.tasks).toEqual([
      expect.objectContaining({
        text: "New Task",
      }),
    ]);
    //expecting the input field to clear after submitting
    expect(input.element.value).toBe("");
  });
});
