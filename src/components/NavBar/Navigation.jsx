import React from "react";
import { Icon } from "../../Icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-start">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 flex items-center rounded-full justify-center bg-black bg-opacity-70"
      >
        <Icon name="leftarrow" size={30} />
      </button>
      <button
        onClick={() => navigate(1)}
        className="w-8 h-8 flex items-center rounded-full justify-center bg-black bg-opacity-70"
      >
        <Icon name="rightarrow" size={30} />
      </button>
    </nav>
  );
}

export default Navigation;
