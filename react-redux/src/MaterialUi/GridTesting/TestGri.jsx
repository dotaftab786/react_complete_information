import {
  Button,
  Grid
} from "@mui/material";

const TestGri= ()=>{
  const design = (
    <>
    <Grid container>
      <Grid item sm={4} xs={12} md={3}>
      <Button variant="contained" color='primary' sx={{width:"100%"}}>BUTTON-1</Button>
      </Grid>
      <Grid item sm={4} xs={12} md={3}>
      <Button variant="contained" color="secondary" sx={{width:"100%"}}>BUTTON-2</Button>
      </Grid>
      <Grid item sm={4} xs={12} md={6}>
      <Button variant="contained" color="warning" sx={{width:"100%"}}>BUTTON-3</Button>
      </Grid>
    </Grid>
    </>
  );
  return design;
}
export default TestGri;
