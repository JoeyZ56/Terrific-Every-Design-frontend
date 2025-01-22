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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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
      <AppBar position="fixed" sx={{ backgroundColor: "#FF7043" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1, // FlexGrow makes it align left
              color: "#000",
              fontWeight: "bold",

              fontSize: {
                xs: "1.0rem",
                sm: "1.2rem",
                md: "1.5rem",
                lg: "1.8rem",
              },
            }}
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
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#FF7043", // Set the background color of the entire drawer
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" sx={{ color: "#000" }} />
          </ListItem>
          <ListItem button component={Link} to="/requestform">
            <ListItemText primary="Request Form" sx={{ color: "#000" }} />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItem sx={{ color: "#000" }}>
              {" "}
              <ChevronLeftIcon /> Close
            </ListItem>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
