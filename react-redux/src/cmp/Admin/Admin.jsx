import {
  Stack,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  ListSubheader,
  Collapse,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Breadcrumbs,
  Typography
} from "@mui/material";

import { deepOrange } from '@mui/material/colors';
import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  logoutRequest
} from "../Login/Login.action";
import MediaQuery from "react-responsive";
import {
   useState,
   useEffect
 } from 'react';
 import {
   Link,
   Outlet,
   useResolvedPath,
   useMatch,
   useLocation,
   useNavigate
 } from 'react-router-dom'
 import AdminMenu from "../../Json-api/AdminMenus";

const Admin = ()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {LoginReducer} = useSelector(response=>response);
  const checkForLogout = ()=>{
    if(LoginReducer.isLogout){
      return navigate("/login");
    }
  }
  useEffect(checkForLogout,[LoginReducer]);
  const[user,setUser] = useState(null);

  const showUserInfo = ()=>{
    if(!user){
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      console.log(userInfo.name)
      return setUser(userInfo)
    }
  }

  const activeRoute = ()=>{
    return navigate("/admin-panel/dashboard/modern");
  }

  useEffect(()=>{
    showUserInfo();
    activeRoute();
  },[user])

  const[active,setActive] = useState(true)
  const[activeOnMobile,setActiveOnMobile] = useState(false);
  const[width,setWidth] = useState(250);
  const[collapsible,setCollapsible] = useState(false);

  const location  = useLocation();
  let routing = location.pathname.split("/");

  const[parent,setParent] = useState(null);
  const open = Boolean(parent);
  const openProfileMenu = (e)=>{
    const el = e.currentTarget;
    setParent(el);
  }

  const closeProfileMenu = ()=>{
    return setParent(null);
  }

  const controlDrawerOnDesktop = ()=>{
    return (
      setActive(!active),
      active ? setWidth(0) : setWidth(250)
    )
  }

  const controlDrawerOnMobile = ()=>{
    return (
      setActiveOnMobile(!activeOnMobile),
      activeOnMobile ? setWidth(0) : setWidth(250)
    )
  }
  const DesktopDrawer = ()=>{
    const temp = (
      <>
      <Drawer open={active} variant="persistent"
      sx={{
        width:width,
        "& .MuiDrawer-paper":{
          width: width
        }
      }}
      >
      {
        AdminMenu.map((admin)=>{
          return <MenuList adminMenu={admin} key={admin.id}/>
        })
      }
      </Drawer>
      </>
    );
    return temp;
  }

  const MobileDrawer = ()=>{
    const temp = (
      <>
      <Drawer open={activeOnMobile} variant="temporary"
      onClose= {controlDrawerOnMobile}
      onClick= {controlDrawerOnMobile}
      sx={{
        width:width,
        "& .MuiDrawer-paper":{
          width: width
        }
      }}
      >
      {
        AdminMenu.map((admin)=>{
          return <MenuList adminMenu={admin} key={admin.id}/>
        })
      }
      </Drawer>
      </>
    );
    return temp;
  }

  const BreadLink = ({data})=>{
    return <Typography
      style={{
        textTransform: "capitalize",
        color: data.index === data.length-1 ? deepOrange[500] : null
      }}
      >
      {data.item}
      </Typography>  }

  const Dropdown = ({data})=>{
    const dropdownDesign = (
      <>
        <Collapse in={collapsible} sx={{ml:4}}>
          {
            data.dropdownMenu.map((item)=>{
              return <Nav data={item}key={item.id} />
            })
          }
        </Collapse>
      </>
    );
    return dropdownDesign;
  }

  const Nav = ({data})=>{
      const path = useResolvedPath(data.link);
      const activeLink = useMatch({path:path.pathname, end:true});
      const navDesign = (
        <>
        <ListItem sx={{ py: 0 }}>
          <ListItemButton
            component= {Link}
            to= {data.link ? data.link : false}
            style = {{
              backgroundColor: activeLink && data.link ? deepOrange[500] : null,
              color: activeLink && data.link ? "white" : null
            }}
            onClick={data.isDropdown ? ()=>setCollapsible(!collapsible) : null}>
            <ListItemIcon>
              <span className="material-icons-outlined"
              style = {{
                color: activeLink && data.link ? "white" : null
                }}
              >
              {data.icon}
              </span>
            </ListItemIcon>
            <ListItemText primary={data.label} />
            {
              data.isDropdown ? <span className="material-icons-outlined">expand_circle_down</span> : null
            }
          </ListItemButton>

        </ListItem>
        {
          data.isDropdown ? <Dropdown data={data}/> : null
        }
        </>
      );
      return navDesign;
  }

  const MenuList = ({adminMenu})=>{
    const menuDesign = (
      <>
        <List subheader={<ListSubheader>{adminMenu.cat}</ListSubheader>}>
          {
            adminMenu.menus.map((menu)=>{
              return <Nav data={menu} key={menu.id} />
            })
          }
        </List>
      </>
    );
    return menuDesign;
  }

  const design = (
    <>
      <Stack>
        <MediaQuery minWidth={1224}>
          <DesktopDrawer />
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <MobileDrawer />
        </MediaQuery>
        <AppBar position="fixed"
          elevation= {0}
          sx={{
            width:{
              xs: '100%',
              md: `calc(100% - ${width}px)`
            },
            transition: "0.5s",
            background: "inherit",
            color: "inherit"
          }}
        >
        <Stack direction="row" justifyContent="space-between">
          <MediaQuery minWidth={1224}>
          <Toolbar>
            <IconButton sx={{color:"inherit"}} onClick={controlDrawerOnDesktop}>
            <span className="material-icons-outlined">menu</span>
            </IconButton>
          </Toolbar>
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
          <Toolbar>
            <IconButton sx={{color:"inherit"}} onClick={controlDrawerOnMobile}>
            <span className="material-icons-outlined">menu</span>
            </IconButton>
          </Toolbar>
          </MediaQuery>
          <Toolbar>
          <Stack direction="row" justifyContent='center' alignItems="center" spacing="5px" sx={{pr: 3}}>
            <IconButton sx={{color:"inherit"}}>
            <span className="material-icons-outlined">shopping_bag</span>
            </IconButton>
            <IconButton sx={{color:"inherit"}}>
            <span className="material-icons-outlined">shopping_cart</span>
            </IconButton>
            <IconButton sx={{color:"inherit"}}>
            <span className="material-icons-outlined">shopping_bag</span>
            </IconButton>
            <IconButton sx={{color:"inherit"}} onClick={openProfileMenu}>
            <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
              anchorEl={parent}
              open={open}
              onClick={closeProfileMenu}
              onClose={closeProfileMenu}
              PaperProps={{
                   elevation: 0,
                   sx: {
                     overflow: 'visible',
                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     '& .MuiAvatar-root': {
                       width: 32,
                       height: 32,
                       ml: -0.5,
                       mr: 1,
                     },
                     '&:before': {
                       content: '""',
                       display: 'block',
                       position: 'absolute',
                       top: 0,
                       right: 14,
                       width: 10,
                       height: 10,
                       bgcolor: 'background.paper',
                       transform: 'translateY(-50%) rotate(45deg)',
                       zIndex: 0,
                     },
                   },
                 }}
                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
              <MenuItem>
                <Avatar /> {user && user.name}
              </MenuItem>
              <MenuItem>
                <span className="material-icons-outlined" style={{marginRight:"8px"}}>email</span>{user && user.email}
              </MenuItem>
              <Divider />

              <MenuItem>
                <ListItemIcon>
                <span className="material-icons-outlined">person_add</span>
                 Add Another Account
                </ListItemIcon>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                <span className="material-icons-outlined">settings</span>
                 Setting
                </ListItemIcon>
              </MenuItem>
              <MenuItem>
                <ListItemIcon onClick={()=>dispatch(logoutRequest())}>
                <span className="material-icons-outlined">logout</span>
                 Logout
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </Stack>
          </Toolbar>
        </Stack>
       </AppBar>
       <Divider />
       <Stack sx={{
         ml: {
           xs: 0,
           md: `${width}px`
         },
         mt: 8,
         p: 2,
         background: "#f1f1f1",
         height: "100vh"
       }}>
       <Breadcrumbs aria-label="breadcrumb" sx={{my:5}}>
        {
              routing.map((item,index)=>{
                 if(index > 0)
                 {
                  return <BreadLink key={index} data={
                    {
                     index: index,
                     item: item,
                     length: routing.length
                    }
                } />
                 }
              })
        }
       </Breadcrumbs>
        <Outlet />
       </Stack>
    </Stack>
    </>
  );
  return design;
}
export default Admin;
