import { GET_TASKS, POST_TASK, DELETE_TASK } from "../types";

const initialState = {
  tasks: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case POST_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TASK:
      let index_to_delete = state.tasks.findIndex(
        (task) => task.taskId === action.payload
      );
      state.tasks.splice(index_to_delete, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}
