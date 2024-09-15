import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Kitaplik from "../views/Kitaplik";

function Content() {
  return (
    <main className="flex-auto">
      <NavBar />
      <Routes>
        {/* Route bileşenlerinin sadece element prop'uyla kullanılmasına 
        dikkat edin v6 farklılığı
         */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/kitaplik" element={<Kitaplik />} />
      </Routes>
    </main>
  );
}

export default Content;
