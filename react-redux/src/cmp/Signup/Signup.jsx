import {
  Button,
  Typography,
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox
} from "@mui/material";
import {
  useState
} from "react";
import MediaQuery from "react-responsive";
import {
  Link
} from "react-router-dom";
const Signup = ()=>{

  const signupForm = {
    fullname: "",
    mobile: "",
    email: "",
    password: ""
  }

  const signupFormError = {
    fullname:{
      state:false,
      message:""
    },
    mobile:{
      state:false,
      message:""
    },
    email:{
      state:false,
      message:""
    },
    password:{
      state:false,
      message:""
    }
  }
  const[input,setInput] = useState(signupForm);
  const[error,setError] = useState(signupFormError);

  const updateValue = (e)=>{
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

  const fullnameValidation = (e)=>{
    const input = e.target;
    const key = input.name;
    const isRequired = required(input);
    return setError((oldData)=>{
      return {
        ...oldData,
        [key]:isRequired
      }
    })
  }

  const mobileValidation = (e)=>{
    const input = e.target;
    const key = input.name;
    const isRequired = required(input);
    const isMinLength = minLength(input,8);
    const isMaxLength = maxLength(input,13)
    return setError((oldData)=>{
      return {
        ...oldData,
        [key]:(isRequired.state && isRequired) ||
        (isMinLength.state && isMinLength) ||
        (isMaxLength)

      }
    })
  }

  const emailValidation = (e)=>{
    const input = e.target;
    const key = input.name;
    const isRequired = required(input);
    const isEmailValid = emailSyntax(input);
    return setError((oldData)=>{
      return {
        ...oldData,
        [key]:(isRequired.state && isRequired) ||
          (isEmailValid)
      }
    })
  }

  const passwordValidation = (e)=>{
    const input = e.target;
    const key = input.name;
    const isRequired = required(input);
    const isMinLength = minLength(input,8);
    const isMaxLength = maxLength(input,16);
    const isPasswordValid = passwordSyntax(input);
    return setError((oldData)=>{
      return {
        ...oldData,
        [key]:(isRequired.state && isRequired) ||
          (isMinLength.state && isMinLength) ||
          (isMaxLength.state && isMaxLength) ||
          (isPasswordValid)
      }
    })
  }

  const required = (input)=>{
    const value = input.value.trim();
    if(value.length === 0){
      return {
        state: true,
        message: "This Field is required!"
      }
    }else{
      return {
        state: false,
        message: ""
      }
    }
  }

  const  minLength = (input,requiredLength)=>{
    const value = input.value.trim();
    if(value.length >= requiredLength){
      return {
        state: false,
        message: ""
      }
    }else{
      return {
        state: true,
        message: `Minimum ${requiredLength} length is required `
      }
    }
  }

  const  maxLength = (input,requiredLength)=>{
    const value = input.value.trim();
    if(value.length <= requiredLength){
      return {
        state: false,
        message: ""
      }
    }else{
      return {
        state: true,
        message: `Maximum ${requiredLength} length is required `
      }
    }
  }

  const emailSyntax = (input)=>{
    const value = input.value.trim();
    const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(regex.test(value)){
      return {
        state: false,
        message: ""
      }
    }else{
      return {
        state: true,
        message: "Email is not valid"
      }
    }
  }

  const passwordSyntax = (input)=>{
    const value = input.value.trim();
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=)/g;
    if(regex.test(value)){
      return {
        state: false,
        message: ""
      }
    }else{
      return {
        state: true,
        message: "Password required uppercase,lowercase,number and special characters"
      }
    }
}
  const design = (
    <>
    <Grid container>
      <Grid item>
        <MediaQuery minWidth={1224}>
        <img src="images/auth.svg" alt="auth" width="100%"/>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
        <img src="images/mobile-auth.png" alt="mobile-auth" width="100%"/>
        </MediaQuery>
      </Grid>
      <Grid item sx={{p:2}}>
      <Typography variant="h2" sx={{mb:5}}>
        Register
      </Typography>
      <form>
        <Stack direction="column" spacing={3}>
          <TextField
              error={error.fullname.state}
              helperText={error.fullname.message}
              label="Fullname"
              name="fullname"
              value={input.fullname}
              variant="outlined"
              onChange={updateValue}
              onBlur={fullnameValidation}
              onInput={fullnameValidation}
          />
          <TextField
              error={error.mobile.state}
              helperText={error.mobile.message}
              type="number"
              label="Mobile"
              name="mobile"
              value={input.mobile}
              variant="outlined"
              onChange={updateValue}
              onBlur={mobileValidation}
              onBlur={mobileValidation}
          />
          <TextField
              error={error.email.state}
              helperText={error.email.message}
              type="email"
              label="Email"
              name="email"
              value={input.email}
              variant="outlined"
              onChange={updateValue}
              onBlur={emailValidation}
              onInput={emailValidation}
          />
          <TextField
              error={error.password.state}
              helperText={error.password.message}
              type="password"
              label="password"
              name="password"
              value={input.password}
              variant="outlined"
              onChange={updateValue}
              onBlur={passwordValidation}
              onInput={passwordValidation}
          />
          <Stack direction="row" justifyContent="space-between">
            <FormGroup>
              <FormControlLabel
                label="I accept terms and conditions"
                control={<Checkbox />}
                />
            </FormGroup>
            <Button component={Link} to="login">ALREADY HAVE AN ACCOUNT ?</Button>
          </Stack>
          <div>
          <Button type="submit" variant="contained">Sign up</Button>
          </div>
        </Stack>
      </form>
      </Grid>
    </Grid>

    </>
  );
  return design;
}
export default Signup;
