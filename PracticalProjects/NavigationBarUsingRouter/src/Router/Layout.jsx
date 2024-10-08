import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav >
        <ul className="nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/service">Service</Link>
        </ul>
      </nav>
      <div className="ContentBody">
      <Outlet/>
      </div>
      
    </div>
  );
};

export default Layout;
