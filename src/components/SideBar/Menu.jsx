import { Icon } from "../../Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `
            menu-item ${isActive ? "menu-item-active" : ""}`}
          >
            <span>
              <Icon name="home" size={24} />
            </span>
            Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => `
            menu-item ${isActive ? "menu-item-active" : ""}`}
          >
            <span>
              <Icon name="search" size={24} />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kitaplik"
            className={({ isActive }) => `
            menu-item ${isActive ? "menu-item-active" : ""}`}
          >
            <span>
              <Icon name="kitap" size={24} />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
