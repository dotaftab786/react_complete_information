import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./Signup.state";

//http hooks can not imported in action
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3434";
const signupRequest = (formData)=>{
  return async (dispatch)=>{
    try {
      dispatch({
        type: SIGNUP_REQUEST,
        data: []
      })
      const response = await axios({
        method: "post",
        url: "/signup",
        data: formData
      });
       dispatch({
         type: SIGNUP_SUCCESS,
         payload: response.data
       })
    } catch (err) {
      dispatch({
        type: SIGNUP_ERROR,
        error: err.response.data
      })
    }
  }
}

export {
  signupRequest
}
