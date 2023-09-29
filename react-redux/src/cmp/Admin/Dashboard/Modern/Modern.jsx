import {
  Grid
} from "@mui/material";

import Congratulation from "./Congratulation/Congratulation";
import Purchase from "./Purchase/Purchase";
import TotalEarning from "./TotalEarning/TotalEarning";
<<<<<<< Updated upstream
=======
import Revenue from "./RevenueUpdates/Revenue";
>>>>>>> Stashed changes
const Modern = ()=>{
  const design = (
    <>
      <Grid container spacing={4}>
        <Congratulation />
        <Purchase />
        <TotalEarning />
<<<<<<< Updated upstream
=======
        <Revenue />
>>>>>>> Stashed changes
      </Grid>
    </>
  )
  return design;
}

export default Modern;
