import { GET_TASKS, LOADING_TASKS } from "../types";

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
    default:
      return state;
  }
}
