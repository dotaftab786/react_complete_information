import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./Signup.state";

const Model = {
  isLoading: false,
  data: null,
  error: null
}

const SignupReducer = (state=Model,action)=>{
  switch(action.type) {
    case SIGNUP_REQUEST : return {
      ...state,
      isLoading: true,
      data: null,
      error: null
    }
    case SIGNUP_SUCCESS : return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: null
    }
    case SIGNUP_ERROR : return {
      ...state,
      isLoading: false,
      error: action.error,
      data: null
    }
    default : return state;
  }
}

export default SignupReducer;
