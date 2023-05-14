import {
  Stack,
  Button,
  Container
} from "@mui/material";

import Menus from '../../Json-api/Menu';
import "./Navbar.css";
const Navbar = ()=>{
  const Buttons = ({data})=>{
    const buttonDesign = (
      <>
        <Button sx={{
          "&:hover":{
            background:"red",
            color:"white",
            transition:"0.5s"
            }
          }}>{data.label}</Button>
      </>
    );
    return buttonDesign;
  }
  const design = (
    <>
      <Stack className='bg-light'>
      <Container sx={{m:4}} className="bg-light">
        <Stack direction={{
          xs:"column",
          sm:"row"
        }} justifyContent="space-between">
         <h4>Testing</h4>
          <Stack direction={{
            xs: "column",
            sm: "row"
          }} spacing={1}>
          {
            Menus.map((menu)=>{
              return <Buttons data={menu} key={menu.id} />
            })
          }
          </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
  return design;
}
export default Navbar;
