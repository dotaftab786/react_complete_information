import {
  Button,
  Box
} from "@mui/material";

import {
  ThemeProvider,
  createTheme
} from "@mui/material/styles";
import { red, cyan, yellow, amber, orange} from "@mui/material/colors";
const MaterialColorTheme = ()=>{

  const custom = createTheme({
    palette:{
      primary: red,
      secondary: cyan,
      error: yellow,
      info: amber,
      warning: orange
    }
  });

  const design = (
    <>
      <ThemeProvider theme={custom}>
        <Button size="large" variant="contained" color="primary">SUBMIT</Button>
        <Button variant='contained' sx={{backgroundColor: 'primary.light'}}>Check</Button>
      </ThemeProvider>
      <Button variant="contained" color="primary">TEST</Button>
    </>
  );
  return design;
}

export default MaterialColorTheme;
