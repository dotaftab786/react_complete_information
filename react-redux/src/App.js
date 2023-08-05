import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import Signup from "./cmp/Signup/Signup";
import Admin from "./cmp/Admin/Admin";
import Dashboard from "./cmp/Admin/Dashboard/Dashboard";
import Login from "./cmp/Login/Login";
import NotFound from "./cmp/NotFound/NotFound";
import "material-icons/iconfont/material-icons.css";

import {
   red,
   deepPurple,
   teal,
   lime
 } from '@mui/material/colors';
import "@fontsource/poppins";
import {
  ThemeProvider,
  createTheme
} from "@mui/material";

const App = ()=>{

  const Theme = createTheme({
    palette:{
      primary: red,
      warning: teal,
      error: lime
    },
    typography:{
      fontFamily: "Poppins"
    }
  });

  const design = (
    <>
      <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="admin-panel" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
  return design;
}

export default App;
