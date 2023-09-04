import {
  Grid,
  Button,
  Container,
  TextField,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  OutlinedInput,
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment
} from "@mui/material";
import * as yup from "yup";
import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  LoadingButton
} from "@mui/lab";
import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  useState,
  useEffect
} from "react";

import Cookies from "universal-cookie";

import {
  loginRequest
} from "./Login.action";

const Login = ()=>{
  const cookie = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {LoginReducer} = useSelector(response=>response);
  const[disabled,setDisabled] = useState(true);
  const[checked,setChecked] = useState(false);
  const[input,setInput] = useState({
    username:"",
    password:""
  })

  const[error,setError] = useState({
    username:{
      state:false,
      message:""
    },
    password:{
      state:false,
      message:""
    }
  })
  const checkForLogin = ()=>{
    if(LoginReducer.userNotFound){
      return setError((oldData)=>{
        return {
          ...oldData,
          username:{
            state:true,
            message:"User does Not exist"
          },
          password:{
            state:false,
            message:""
          }
        }
      })
    }

    if(LoginReducer.incorrectPassword){
      return setError((oldData)=>{
        return {
          ...oldData,
          username:{
            state:false,
            message:""
          },
          password:{
            state:true,
            message:"Incorrect password!"
          }
        }
      })
    }

    if(LoginReducer.isLogged){
      cookie.set("authToken",LoginReducer.data.token,{maxAge:86400})
      return navigate("/admin-panel");
    }
  }

  const rememberMe = ()=>{
    let user = JSON.parse(localStorage.getItem("user"));
    if(user){
      return(
        setInput(user),
        setChecked(true),
        setDisabled(false)
      )
    }
    console.log(user);
  }
  useEffect(()=>{
    checkForLogin();
    rememberMe();
  },[LoginReducer]);

  const schema = yup.object().shape({
    username:yup.string().required().email(),
    password:yup.string().required()
  });

  const handleInput = (e)=>{
    const input = e.target;
    const key = input.name;
    const value = input.value;
    return setInput((oldData)=>{
      return {
        ...oldData,
        [key]:value
      }
    })
  }

  const validateSubmit = async ()=>{
    const isValid = await schema.isValid(input);
      return setDisabled(!isValid);
  }

  const validateInput = async (e)=>{
    const key = e.target.name;
    try {
      await schema.validateAt(key,input);
      return setError((oldData)=>{
        return {
          ...oldData,
          [key]:{
            state:false,
            message:""
          }
        }
      })
    } catch (err) {
      return setError((oldData)=>{
        return {
          ...oldData,
          [key]:{
            state:true,
            message:err.errors[0]
          }
        }
      })
    }
  }

  const login = (e)=>{
    e.preventDefault();
    if(checked){
    localStorage.setItem("user",JSON.stringify(input));
    }
    dispatch(loginRequest(input))
  }

  const design = (
    <>
    <Container sx={{m:4}}>
      <Grid container>
        <Grid item xs={12} sm={6}>One</Grid>
        <Grid item xs={12} sm={6}>
         <h1>Login</h1>
          <form onSubmit = {login}>
            <Stack direction="column" spacing={3}>
            <TextField
              error={error.username.state}
              helperText={error.username.message}
              label="Username"
              variant="outlined"
              name="username"
              value={input.username}
              onChange={handleInput}
              onKeyDown={validateSubmit}
              onInput={validateInput}
             />
             <FormControl variant="outlined">
             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
             <OutlinedInput
              error={error.password.state}
              helperText={error.password.message}
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={input.password}
              onChange={handleInput}
              onKeyDown={validateSubmit}
              onInput={validateInput}
              />
              </FormControl>
            <Stack direction='row' justifyContent="end">
            <Button variant="contained" color="primary" component={Link} to="/forgot-password">Forgot password</Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={()=>setChecked(!checked)} checked={checked}/>} label="Remember Me" />
            </FormGroup>
            <LoadingButton loading={LoginReducer.isLoading} disabled={disabled} type="submit" variant="contained" color="secondary">Login</LoadingButton>
            </Stack>
            </Stack>
            <Link to='/'> Create an Account</Link>
          </form>
        </Grid>
      </Grid>
    </Container>
    </>
  );
  return design;
}
export default Login;
