import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={"logo.png"} className="pokimon" alt="logo" />
        </div>
        <Link to={"/"} className="l1">BEST POKEMON SITE <IoHome /> </Link>
        <div className="links">        
       {/*   <Link to={"/details"}>DETAILS  </Link> */}
          <Link to={"/cardAdded"}>CARD</Link>
          </div>
       
      </nav>
    </>
  );
};

export default Navbar;
