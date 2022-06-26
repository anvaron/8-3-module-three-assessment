import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/ghibli.png"

function Navbar () {

  return (
    <>
      <nav>
        <Link className="logo" to="/">
          <img src={logo} />
        </Link>
        <Link className="" to="/movies">
          Movies 
        </Link>
        <Link className="" to="/people">
          People 
        </Link>
        <Link className="" to="/locations">
          Locations 
        </Link>
      </nav>
    </>
  )
}

export default Navbar;