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

const App = ()=>{

  const design = (
    <>
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
    </>
  );
  return design;
}

export default App;
