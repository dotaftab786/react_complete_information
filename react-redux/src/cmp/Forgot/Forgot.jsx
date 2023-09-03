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
const Forgot = ()=>{
  const design = (
    <>
    <Container sx={{m:4}}>
      <Grid container>
        <Grid item xs={12} sm={6}>One</Grid>
        <Grid item xs={12} sm={6}>
         <h1>Forgot</h1>
        </Grid>
      </Grid>
    </Container>
    </>
  );
  return design;
}
export default Forgot;
