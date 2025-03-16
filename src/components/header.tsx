import React from "react";
import { NavLink } from "react-router";

const NavBar: React.FC = () => {
  return (
    <header className="navbar">
    <h1 className="logo">MyApp</h1>
    <nav className="nav">
      <div className="navList">
        
          <NavLink className="navItem"to="/about.tsx">Hakkımızda</NavLink>
      
          <NavLink className="navItem"to="/team.tsx">Ekibimiz</NavLink>
        
          <NavLink className="navItem"to="/services.tsx">Hizmetlerimiz</NavLink>
        
          <NavLink className="navItem" to="/communication.tsx">İletişim</NavLink>
      </div>
    </nav>
  </header>
  
  );
};

export default NavBar;
