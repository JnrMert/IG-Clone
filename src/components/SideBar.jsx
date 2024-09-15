import React from "react";
import logo from "../img/Spotify-logo.svg";
import Menu from "./SideBar/Menu";
import { Icon } from "../Icons";
import Playlist from "./SideBar/Playlist";
import Download from "./SideBar/Download";

function SideBar() {
  return (
    <aside className="w-60 py-6 flex flex-col">
      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="" className="w-48 h-32 override-position" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href=""
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white "
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 group-hover:bg-opacity-100 bg-white text-black rounded bg-opacity-50">
                <Icon name="plusicon" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href=""
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="bg-gradient-to-br from-purple-700 to-blue-300 w-6 h-6 flex items-center mr-4 group-hover:opacity-100 justify-center bg-white text-white rounded-sm opacity-60 ">
                <Icon name="hearthicon" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlist />
      <Download />
    </aside>
  );
}

export default SideBar;
