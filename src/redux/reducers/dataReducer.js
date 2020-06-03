import { GET_TASKS, POST_TASK } from "../types";

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
    default:
      return state;
  }
}
