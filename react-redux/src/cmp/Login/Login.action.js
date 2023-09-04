import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  INCORRECT_PASSWORD,
  USER_NOT_FOUND,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS
} from "./Login.state";
import Cookies from "universal-cookie";
import axios from "axios";
axios.defaults.baseURL="http://localhost:3434";

const loginRequest = (formData)=>{
  return async (dispatch)=>{
    try {
      dispatch({
        type: LOGIN_REQUEST,
        data: []
      })
      const response = await axios({
        method: "post",
        url: "/login",
        data: formData
      })
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      })
    } catch (err) {
      if(err.response.status === 404){
        dispatch({
          type: USER_NOT_FOUND
        })
      }else{
        dispatch({
          type: INCORRECT_PASSWORD
        })
      }
    }
  }
}

const logoutRequest = ()=>{
  const cookie = new Cookies();
  const userInfo = JSON.parse(sessionStorage.getItem("user"));
  const id = userInfo.userId;
  return async (dispatch)=>{
    try {
      const response = await axios({
        method: "get",
        url: "/logout/"+id
      })
      sessionStorage.clear();
      cookie.remove("authToken");
      dispatch({
        type: LOGOUT_SUCCESS
      })
    } catch (err) {
      dispatch({
        type:LOGOUT_FAILED
      })
    }
  }
}

export {
  loginRequest,
  logoutRequest
}
