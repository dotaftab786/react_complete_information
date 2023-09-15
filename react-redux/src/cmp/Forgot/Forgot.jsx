import {
  Grid,
  Button,
  Container,
  TextField,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material"

import {
  LoadingButton
} from "@mui/lab";

import {
  useNavigate
} from "react-router-dom";
import {
  useState,
  useEffect
} from "react";

import {
  requestForget,
  changePassword
} from "./Forgot.action";

import {
  useDispatch,
  useSelector
} from "react-redux";

const Forgot = ()=>{

  const navigate = useNavigate();
  const[error,setError] = useState({
    username:{
      state: false,
      message: ""
    },
    code:{
      state: false,
      message: ""
    }
  })
  const dispatch = useDispatch();
  const {ForgotReducer} = useSelector(response=>response);

  const checkUser = ()=>{
    if(ForgotReducer.success){
      return setVerifyForm(true)
    }
    if(ForgotReducer.userNotFound){
      return setError((oldData)=>{
        return {
          ...oldData,
          username:{
            state:true,
            message: "User not Found"
          }
        }
      })
    }
  }

  const checkForPassword = ()=>{
    if(ForgotReducer.passwordChanged){
        return navigate("/login");
    }

    if(ForgotReducer.invalidCode){
      return setError((oldData)=>{
        return {
          ...oldData,
          code:{
            state: true,
            message: "Code is invalid!"
          }
        }
      })
    }
  }
  useEffect(()=>{
    checkUser();
    checkForPassword();

  },[ForgotReducer]);

  const[input,setInput] = useState({
    email:"",
    code:"",
    password:""
  })

  const handleInput = (e)=>{
    const input = e.target;
    const key = input.name;
    const value = input.value.trim();
    return setInput((oldData)=>{
      return {
        ...oldData,
        [key]:value
      }
    })
  }

  const[verifyForm,setVerifyForm] = useState(false);
  const design = (
    <>
    <Container sx={{m:4}}>
      <Grid container>
        <Grid item xs={12} sm={6}>One</Grid>
        <Grid item xs={12} sm={6}>
         <h1>Forgot Password</h1>
         {
         !verifyForm ? <form onSubmit={(e)=>dispatch(requestForget(e))}>
            <Stack direction="column">
            <TextField
                error={error.username.state}
                helperText={error.username.message}
                name="email"
                label="Email id"
                variant="outlined"
                onChange={handleInput}
                sx={{my:3}}
            />
            <div>
            <LoadingButton loading={ForgotReducer.isLoading} variant="contained" type="submit">Forgot</LoadingButton>
            </div>
            </Stack>
         </form> :
         <form onSubmit={(e)=>dispatch(changePassword(e,input))}>
            <Stack direction="column">
            <TextField
                error={error.code.state}
                helperText={error.code.message}
                name="code"
                label="Verification code"
                variant="outlined"
                onChange={handleInput}
                sx={{mt:3}}
                type="number"
            />
            <TextField
                name="password"
                label="New Password"
                variant="outlined"
                onChange={handleInput}
                sx={{my:3}}
                type="password"
             />

            <div>
            <LoadingButton variant="contained" type="submit">Submit</LoadingButton>
            </div>
            </Stack>
         </form>
       }
        </Grid>
      </Grid>
    </Container>
    </>
  );
  return design;
}
export default Forgot;
