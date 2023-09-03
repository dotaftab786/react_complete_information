import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  INCORRECT_PASSWORD,
  USER_NOT_FOUND
} from "./Login.state";

const Model = {
  data:[],
  isLoading:false,
  userNotFound: false,
  incorrectPassword: false,
  isLogged: false
}

const LoginReducer = (state=Model,action)=>{
  switch(action.type) {
    case LOGIN_REQUEST : return {
      ...state,
      data: [],
      isLoading: true,
      userNotFound: false,
      incorrectPassword: false,
      isLogged: false
    }
    case LOGIN_SUCCESS : return {
      ...state,
      data: action.payload,
      isLoading: false,
      userNotFound: false,
      incorrectPassword: false,
      isLogged: true
    }
    case USER_NOT_FOUND : return {
      ...state,
      data: [],
      isLoading: false,
      userNotFound: true,
      incorrectPassword: false,
      isLogged: false
    }
    case INCORRECT_PASSWORD : return {
      ...state,
      data: [],
      isLoading: false,
      userNotFound: false,
      incorrectPassword: true,
      isLogged: false
    }
    default : return state;
  }
}

export default LoginReducer;
