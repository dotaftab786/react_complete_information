import {
  Grid,
  Button,
  Container,
  TextField,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import * as yup from "yup";
import {
  Link
} from "react-router-dom";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  useState
} from "react";

import {
  loginRequest
} from "./Login.action";

const Login = ()=>{

  const dispatch = useDispatch();
  const response = useSelector(response=>response);
  console.log(response);
  const[disabled,setDisabled] = useState(true);
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
  const schema = yup.object().shape({
    username:yup.string().required().email(),
    password:yup.string().required().min(8).max(15)
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
            <TextField
              error={error.password.state}
              helperText={error.password.message}
              label="Password"
              variant="outlined"
              name="password"
              value={input.password}
              onChange={handleInput}
              onKeyDown={validateSubmit}
              onInput={validateInput}
            />
            <Stack direction='row' justifyContent="end">
            <a href="#">Forgot password ?</a>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </FormGroup>
            <Button disabled={disabled} type="submit" variant="contained" color="secondary">Login</Button>
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
