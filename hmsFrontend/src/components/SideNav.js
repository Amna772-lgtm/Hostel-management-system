import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../appStore";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

export default function Sidenav() {
  const theme = useTheme();
  //const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const open = useAppStore((state) => state.deopen);
  const [activePage, setActivePage] = React.useState('');

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case "/Dashboard":
        setActivePage("Dashboard");
        break;
      case "/RoomAllocation":
        setActivePage("RoomAllocation");
        break;
      case "/MessDues":
        setActivePage("MessDues");
        break;
      case "/MessInventory":
        setActivePage("MessInventory");
        break;
      case "/EmployeeDetails":
        setActivePage("EmployeeDetails");
        break;
      case "/RequestForms":
        setActivePage("RequestForms");
        break;
      default:
        setActivePage("");
        break;
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>(navigate("/"))}> */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: activePage === 'Dashboard' ? '#2b98d5' : 'transparent',
                borderRadius: activePage === 'Dashboard' ? 2 : 0,
                color: activePage === 'Dashboard' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activePage === 'Dashboard' ? '#2b98d5' : 'rgba(0, 0, 0, 0.04)',
                  color: activePage === 'Dashboard' ? '#fff' : 'inherit',
                },
              }}
              onClick={() => {
                navigate('/Dashboard');
                setActivePage('Dashboard');
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: activePage === 'Dashboard' ? '#fff' : 'inherit',
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: activePage === 'RoomAllocation' ? '#2b98d5' : 'transparent',
                borderRadius: activePage === 'RoomAllocation' ? 2 : 0,
                color: activePage === 'RoomAllocation' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activePage === 'RoomAllocation' ? '#2b98d5' : 'rgba(0, 0, 0, 0.04)',
                  color: activePage === 'RoomAllocation' ? '#fff' : 'inherit',
                },
              }}
              onClick={() => {
                navigate('/RoomAllocation');
                setActivePage('RoomAllocation');
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HotelIcon />
              </ListItemIcon>
              <ListItemText
                primary="Room Allocation"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: activePage === 'MessDues' ? '#2b98d5' : 'transparent',
                borderRadius: activePage === 'MessDues' ? 2 : 0,
                color: activePage === 'MessDues' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activePage === 'MessDues' ? '#2b98d5' : 'rgba(0, 0, 0, 0.04)',
                  color: activePage === 'MessDues' ? '#fff' : 'inherit',
                },
              }}
              onClick={() => {
                navigate('/MessDues');
                setActivePage('MessDues');
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText
                primary="Mess Dues"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: activePage === 'MessInventory' ? '#2b98d5' : 'transparent',
                borderRadius: activePage === 'MessInventory' ? 2 : 0,
                color: activePage === 'MessInventory' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activePage === 'MessInventory' ? '#2b98d5' : 'rgba(0, 0, 0, 0.04)',
                  color: activePage === 'MessInventory' ? '#fff' : 'inherit',
                },
              }}
              onClick={() => {
                navigate('/MessInventory');
                setActivePage('MessInventory');
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LocalMallIcon />
              </ListItemIcon>
              <ListItemText
                primary="Mess Inventory"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: activePage === 'EmployeeDetails' ? '#2b98d5' : 'transparent',
                borderRadius: activePage === 'EmployeeDetails' ? 2 : 0,
                color: activePage === 'EmployeeDetails' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activePage === 'EmployeeDetails' ? '#2b98d5' : 'rgba(0, 0, 0, 0.04)',
                  color: activePage === 'EmployeeDetails' ? '#fff' : 'inherit',
                },
              }}
              onClick={() => {
                navigate('/EmployeeDetails');
                setActivePage('EmployeeDetails');
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Employee Details"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: activePage === 'RequestForms' ? '#2b98d5' : 'transparent',
                borderRadius: activePage === 'RequestForms' ? 2 : 0,
                color: activePage === 'RequestForms' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activePage === 'RequestForms' ? '#2b98d5' : 'rgba(0, 0, 0, 0.04)',
                  color: activePage === 'RequestForms' ? '#fff' : 'inherit',
                },
              }}
              onClick={() => {
                navigate('/RequestForms');
                setActivePage('RequestForms');
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText
                primary="Request Forms"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/SignUp")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Create New User"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
