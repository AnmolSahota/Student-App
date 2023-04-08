import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export let login = (usedata) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://reqres.in/api/login`, usedata)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
