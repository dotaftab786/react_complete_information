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

import {
  Link,
  useNavigate
} from "react-router-dom";

const Login = ()=>{
  const navigate = useNavigate();
  
  const login = (e)=>{
    e.preventDefault();
    navigate("/admin-panel");
  }
  const design = (
    <>
    <Container sx={{m:4}}>
      <Grid container>
        <Grid item xs={12} sm={6}>One</Grid>
        <Grid item xs={12} sm={6}>
         <h1>Label</h1>
          <form onSubmit = {login}>
            <Stack direction="column" spacing={3}>
            <TextField label="Username" variant="outlined" />
            <TextField label="Password" variant="outlined" />
            <Stack direction='row' justifyContent="end">
            <a href="#">Forgot password ?</a>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </FormGroup>
            <Button type="submit" variant="contained" color="secondary">Login</Button>
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
