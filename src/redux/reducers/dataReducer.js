import {
  GET_TASKS,
  POST_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SORT_BY_INCOMPLETE,
} from "../types";

const initialState = {
  tasks: null,
};

const sortIncomplete = (a, b) => {
  if (a.status === "Completed" && b.status !== "Completed") {
    return 1;
  } else if (a.status !== "Completed" && b.status === "Completed") {
    return -1;
  } else {
    return 0;
  }
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

    case EDIT_TASK:
      let index_to_update = state.tasks.findIndex(
        (task) => task.taskId === action.payload.taskId
      );
      state.tasks[index_to_update] = action.payload;

      return {
        ...state,
      };

    case SORT_BY_INCOMPLETE:
      console.log(state.tasks);
      state.tasks.sort(sortIncomplete);
      console.log(state.tasks);
      return {
        ...state,
      };

    default:
      return state;
  }
}
