import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  INCORRECT_PASSWORD,
  USER_NOT_FOUND
} from "./Login.state";

import axios from "axios";
axios.defaults.baseURL="http://localhost:3434";

const loginRequest = ({formData})=>{
  return async (dispatch)=>{
    try {
      dispatch({
        type: LOGIN_REQUEST
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
      console.log(err.response)
      if(err.response.status === 401){
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

export {
  loginRequest
}
