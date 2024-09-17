import React from "react";
import { Icon } from "../Icons";
import Navigation from "./NavBar/Navigation.jsx";
import Auth from "./NavBar/Auth.jsx";

function NavBar() {
  return (
    <nav className="h[3.25rem] flex items-center justify-between px-8 ">
      <Navigation />

      <Auth />
    </nav>
  );
}

export default NavBar;
