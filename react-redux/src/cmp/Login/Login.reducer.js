import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  INCORRECT_PASSWORD,
  USER_NOT_FOUND
} from ".Login/state";

const Model = {
  data:null,
  isLoading:false,
  userNotFound: false,
  incorrectPassword: false
}

const LoginReducer = (state,action)=>{
  switch(action.type) {
    case LOGIN_REQUEST : return {
      ...state,
      data: null,
      isLoading: true,
      userNotFound: false,
      incorrectPassword: false
    }
    case LOGIN_SUCCESS : return {
      ...state,
      data: action.payload,
      isLoading: false,
      userNotFound: false,
      incorrectPassword: false
    }
    case USER_NOT_FOUND : return {
      ...state,
      data: null,
      isLoading: false,
      userNotFound: true,
      incorrectPassword: false
    }
    case INCORRECT_PASSWORD : return {
      ...state,
      data: null,
      isLoading: false,
      userNotFound: false,
      incorrectPassword: true
    }

    case default : return state;
  }
}

export {
  LoginReducer
}
