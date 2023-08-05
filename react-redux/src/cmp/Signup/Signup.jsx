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

import MediaQuery from "react-responsive";
import {
  Link
} from "react-router-dom";
const Signup = ()=>{
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
      <Grid item sx={{p:5}}>
      <Typography variant="h2" sx={{mb:3}}>
        Register
      </Typography>
      <form>
        <Stack direction="column" spacing={3}>
          <TextField label="Fullname" variant="outlined" />
          <TextField type="number" label="Mobile" variant="outlined" />
          <TextField type="email"  label="Email" variant="outlined"/>
          <TextField type="password" label="password" variant="outlined" />
          <Stack direction="row" justifyContent="space-between">
            <FormGroup>
              <FormControlLabel
                label="I accept"
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
