import {
  Grid
} from "@mui/material";

import Congratulation from "./Congratulation/Congratulation";
import Purchase from "./Purchase/Purchase";
import TotalEarning from "./TotalEarning/TotalEarning";
const Modern = ()=>{
  const design = (
    <>
      <Grid container spacing={4}>
        <Congratulation />
        <Purchase />
        <TotalEarning />
      </Grid>
    </>
  )
  return design;
}

export default Modern;
