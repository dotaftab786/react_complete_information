import Storage from "./Storage";

import {
  Provider
} from "react-redux";

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
import Modern from "./cmp/Admin/Dashboard/Modern/Modern";
import AuthGuard from "./cmp/guard/AuthGuard";
import Login from "./cmp/Login/Login";
import Forgot from "./cmp/Forgot/Forgot";
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
      primary: deepPurple,
      warning: teal,
      error: red
    },
    typography:{
      fontFamily: "Poppins"
    }
  });

  const design = (
    <>
    <Provider store={Storage}>
      <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="forgot-password" element={<Forgot />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthGuard />}>
          <Route path="admin-panel" element={<Admin />}>
            <Route path="dashboard/modern" element={<Modern />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </Provider>
    </>
  );
  return design;
}

export default App;
