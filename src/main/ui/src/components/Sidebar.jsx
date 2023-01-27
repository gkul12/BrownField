import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlaneDeparture, FaPlaneSlash } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import AddFlight from "./AddFlight";
import { CgProfile } from "react-icons/cg";
import "./Sidebar.css";
import { useState } from "react";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import UpdateFlight from "./UpdateFlight";
import ViewFlight from "./ViewFlight";
import ViewAeroplanes from "./ViewAeroplanes";
import AddAeroplane from "./AddAeroplane";
import DeleteAeroplanes from "./DeleteAeroplane";
import ViewCustomer from "./ViewCustomer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const drawerWidth = 225;

const openedMixin = (theme) => ({
  backgroundColor: "darkslategrey",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "darkslategrey",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "darkslategrey",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const [toggleState, setToggleState] = useState(1);
  // const navigate = useNavigate();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const onNavigateLogoutClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleOnClick = () => {
    return () => {
      <div className="popup" id="icon-button-1">
        <Popup trigger={<CgProfile />}>
          <div>Manisha Lakhe</div>
          <h2>Admin</h2>
        </Popup>
      </div>;
      console.log("This message displays on page render");
    };
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [test, setTest] = useState(localStorage.getItem("loggedInUser"));
  console.log(localStorage.getItem("loggedInUser"));

  return (
    <>
      {/* {localStorage.getItem("loggedInUser") ? ( */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              id="icon-button"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <p id="name">BrownFeild&nbsp;&nbsp;Airlines</p>

            <div className="popup" id="icon-button-1">
              <Popup trigger={<CgProfile />}>
                <div>{localStorage.getItem("loggedInUser")}</div>
                <h3>Admin</h3>
              </Popup>
            </div>

            <IconButton
              id="icon-button-2"
              aria-label="show profile"
              onClick={onNavigateLogoutClick}
              edge="start"
              sx={{
                marginRight: 5,
                alignItems: "right",
                ...(open && { display: "none" }),
              }}
            >
              <FiLogOut />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton id="icon-button" onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <div className="menuitems">
            <MenuList>
              <MenuItem>
                <p id="heading">Flight Operations</p>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(1)}>
                  <FaPlaneDeparture />
                </ListItemIcon>

                <ListItemButton id="icon1" onClick={() => toggleTab(1)}>
                  View Flight
                </ListItemButton>
              </MenuItem>

              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(2)}>
                  <AiOutlinePlus />
                </ListItemIcon>

                <ListItemButton id="icon1" onClick={() => toggleTab(2)}>
                  Add Flight
                </ListItemButton>
              </MenuItem>
              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(3)}>
                  <BiEditAlt />
                </ListItemIcon>
                <ListItemButton id="icon1" onClick={() => toggleTab(3)}>
                  Update Flight
                </ListItemButton>
              </MenuItem>

              <Divider />
            </MenuList>
            <MenuList className="menu">
              <MenuItem>
                <p id="heading">Aeroplane Operations</p>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(4)}>
                  <FaPlaneDeparture />
                </ListItemIcon>

                <ListItemButton id="icon1" onClick={() => toggleTab(4)}>
                  View Aeroplanes
                </ListItemButton>
              </MenuItem>

              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(5)}>
                  <AiOutlinePlus />
                </ListItemIcon>

                <ListItemButton id="icon1" onClick={() => toggleTab(5)}>
                  Add Aeroplanes
                </ListItemButton>
              </MenuItem>
              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(6)}>
                  <RiDeleteBin2Line />
                </ListItemIcon>
                <ListItemButton id="icon1" onClick={() => toggleTab(6)}>
                  Delete Aeroplanes
                </ListItemButton>
              </MenuItem>

              <Divider />
            </MenuList>
          </div>

          <div className="menuitems">
            <MenuList>
              <MenuItem>
                <p id="heading">Customer Management</p>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon id="icon1" onClick={() => toggleTab(7)}>
                  <FaPlaneDeparture />
                </ListItemIcon>

                <ListItemButton id="icon1" onClick={() => toggleTab(7)}>
                  View Flight
                </ListItemButton>
              </MenuItem>

             

              <Divider />
            </MenuList>
            
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          {toggleState === 2 ? (
            <AddFlight />
          ) : toggleState === 3 ? (
            <UpdateFlight />
          ) : toggleState == 4 ? (
            <ViewAeroplanes />
          ) : toggleState == 5 ? (
            <AddAeroplane />
          ) : toggleState == 6 ? (
            <DeleteAeroplanes />
          ) :toggleState == 7 ? (
            <ViewCustomer />
          ) : (
            <ViewFlight />
          )}
        </Box>
      </Box>
      {/* ) : (
        <div>User Needs To Log In</div>
      )} */}
    </>
  );
}
