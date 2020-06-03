import { GET_TASKS, POST_TASK } from "../types";
import axios from "axios";

export const getTasks = () => (dispatch) => {
  axios
    .get("/tasks")
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postTask = (taskData) => (dispatch) => {
  axios
    .post("/posttask", taskData)
    .then((res) => {
      dispatch({
        payload: res.data,
        type: POST_TASK,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
