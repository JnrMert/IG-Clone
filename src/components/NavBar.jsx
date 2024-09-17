import React from "react";
import { Icon } from "../Icons";

function NavBar() {
  return (
    <nav className="h[3.25rem] flex items-center justify-between px-8 my-4">
      <a href="">
        <Icon name="rightarrow" size={24} />
      </a>
    </nav>
  );
}

export default NavBar;
