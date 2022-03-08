import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: "20px",
  },
});

export default function NavBar() {
  const classes = useStyle();
  return (
    <AppBar position="static" sx={{ background: "#181818" }}>
      <Toolbar>
        <NavLink className={classes.tabs} to="/">
          Crud-app
        </NavLink>
        <NavLink className={classes.tabs} to="/allusers">
          All-Users
        </NavLink>
        <NavLink className={classes.tabs} to="/adduser">
          Add-Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
