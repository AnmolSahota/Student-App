import axios from "axios";
import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";

export let getstudentData = (obj) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST_PENDING });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,
      {
        params: obj,
      }
    )
    .then((res) => {
      dispatch({ type: STUDENT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: STUDENT_REQUEST_FAILURE });
    });
};
