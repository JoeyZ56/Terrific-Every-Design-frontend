import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#FF7043" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000",
              fontWeight: "bold",
              fontSize: "28px",
            }} // FlexGrow makes it align left
          >
            Terrific Every Design
          </Typography>
          <IconButton
            edge="start"
            color="#795548"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        // sx={{
        //   "& .MuiDrawer-paper": {
        //     backgroundColor: "#5C6BC0", // Set the background color of the entire drawer
        //   },
        // }}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" sx={{ color: "#000" }} />
          </ListItem>
          <ListItem button component={Link} to="/requestform">
            <ListItemText primary="Request Form" sx={{ color: "#000" }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
