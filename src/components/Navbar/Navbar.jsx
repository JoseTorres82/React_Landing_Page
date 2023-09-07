import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FiMenu } from "react-icons/fi"; 
import { GrClose } from "react-icons/Gr"; 
import { useCart } from "./CartContext/CartContext";


import {
  NavbarContainerStyled,
  ContenedorNavbarStyled,
  LogoContainerImg,
  NavLinksContainer,
  CenterNavbar
} from "./NavbarStyles";

function Navbar({ open }) {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = scrolling ? "scrolled" : "";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainerStyled open={open} className={navbarClassName}>
      <ContenedorNavbarStyled>
        <CenterNavbar>
        <LogoContainerImg>
          <Link to="/">
            <h1>
              Buenas Olas<span>Store</span>
            </h1>
          </Link>
        </LogoContainerImg>
        <Link to="/">
            {scrolling ? (
              <img src="../logo.svg" alt="scrolled-logo"  />
            ) : (
              <img src="../bo_Logo.svg" alt="logo-image" />
            )}
          </Link>
        <NavLinksContainer open={menuOpen}>
          <nav className="nav__menu">
            <input type="checkbox" className="btn-menu" id="btn-menu" />
            <label htmlFor="btn-menu" className="lbl-menu" onClick={toggleMenu}>
              {menuOpen ? (
                <>
                 <GrClose size={24} />
                </>
                
              ) : (
                <FiMenu size={24} />
              )}
            </label>
            <ul className="nav__ul">
              <li>
                <Link to="/" className="nav__items">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Nosotros" className="nav__items">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/Productos" className="nav__items">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/Contacto" className="nav__items">
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="cart-icon">
          <Link to="/carrito">
            <TiShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
        </div>
          </nav>
        </NavLinksContainer>
        </CenterNavbar>
      </ContenedorNavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
