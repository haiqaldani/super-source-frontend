import React from "react";
import Menu from "./Menu";

export default function Navbar2 () {
  return (
    <nav className="navbar justify-content-center navbar-custom bottom-0 start-50 translate-middle-x">
      <div className="">
      <ul className="nav">
        <Menu title="Home" active />
        <Menu title="Search" href="/search"/>
        <Menu title="Contact Us" />
      </ul>
      </div>

    </nav>
  );
}
