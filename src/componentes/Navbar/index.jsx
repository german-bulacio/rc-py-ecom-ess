import React from "react";
import CartWitged from "../CartWitged";
 export const NavBar = () =>{
    return(
        <div className="container">
        <nav className="nav">
          <div className="nav_brand">
            <a className="nav_link" href="#">Esensse</a>
          </div>
            <ul className="nav_list">
                <li >
                    <a className="nav_link" href="#">Sobre Nosotros</a>
                </li>
                <li>
                    <a className="nav_link" href="#">Ofertas</a>
                </li>
                <li >
                    <a className="nav_link" href="#">Contacto</a>
                </li>
                <li>
                  <a className="nav_link" href="#">
                    <CartWitged/>
                  </a>
                </li>
            </ul>
        </nav>
      </div>
    );
 }
 export default NavBar;