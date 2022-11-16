import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-14 py-4 items-center border bottom-1">
      <div className="text-3xl">
        <NavLink to="/">Booksy</NavLink>
      </div>
      <div className="flex gap-2 underline">
        <NavLink to="/signin">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </nav>
  );
}