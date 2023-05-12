// we shoud avoid using * because it loads each and every thing from MaterialUi
// which slow down the application speed
import * as dot from "@mui/material";
import {
  Button,
  Box
} from "@mui/material";
const MaterialUi = ()=>{
  const design = (
    <>
      <dot.Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            "&:hover":{
              background: "red"
            },
            "&:focus":{
              background: 'yellow'
            }
          }}
          >
          Submit
      </dot.Button>
      <Box sx={{
        width:"300px",
        height:"200px",
        background: "red",
        m:4,
        textAlign: "center",
        "&:hover":{
          color:"white",
          background: "black",
          fontSize: "30px"
        }
      }}>HELLO INDIA
      </Box>
    </>
  )
  return design;
}

export default MaterialUi;
