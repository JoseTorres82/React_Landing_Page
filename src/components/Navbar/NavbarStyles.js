import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: absolute;
  background: transparent;
  transition: all ease 0.3s;
  padding: 15px;

  &.scrolled {
    background: #f9e9d8;
   /*  background:#f5f5f5 ; */
  }
  .cart-icon {
    position: relative;
  }

  @media (max-width: 430px) {
    justify-content: center;
  }
`;
export const CenterNavbar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;

  .lbl-menu svg {

    transition: all ease-in-out 0.3s;
  }
`;

export const ContenedorNavbarStyled = styled.div`
  width: 100%;
  line-height: 1.6;
  letter-spacing: 1px;
  background: #f9e9d8;
  left: 0;
  padding: 25px;
  background: transparent;
  overflow: hidden;

  img {
    width: 90px;
    height: 60px;
    object-position: center;
    background-blend-mode: color-burn;
    margin-top: 10px;
  }

  @media (max-width: 980px) {
    margin: 0 auto;
    .nav__items {
      display: block;
    }
    .lbl-menu svg {
      display: block;
    }
  }
  @media (max-width: 576px), (max-width: 429px), (max-width: 320px) {
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const LogoContainerImg = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "PT Sans", sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 576px) {
      font-size: 30px;
      display: none;
    }
  }

  span {
    font-family: "Pt Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 0;
  }
`;

export const NavLinksContainer = styled.nav`
  .nav__menu {
    display: flex;
    gap: 15px;
    font-family: var(--extraFont);
    font-weight: 500;
    margin-right: 0;
    transition: all ease-in-out 0.3s;
    justify-content: space-around;
    align-items: center;
    
  }
 

  .cart-icon:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .navbar-container #nav__input {
    display: none;
  }

  .nav__menu ul {
    display: flex;
    gap: 15px;
  }

  .nav__menu ul li {
    text-decoration: none;
  }

  .nav__items {
    color: #131313;
    text-decoration: none;
    --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
    font-family: "Pt Sans", sans-serif;
  }

  .nav__items::after {
    content: "";
    display: block;
    background: linear-gradient(to right, #2699a6 65%, #fff);
    font-weight: 300;
    font-size: 24px;
    width: 90%;
    margin-top: 3px;
    height: 3px;
    clip-path: var(--clippy);
    transition: 0.3s ease;
    user-select: none;
  }

  .nav__items:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 1% 100%);
    color: #f4511e;
    font-weight: 500;
  }

  .nav__label,
  .nav__input {
    display: none;
  }
  .btn-menu {
    display: none;
  }
  .nav__menu.active ul {
    position: fixed;
    background: bisque;
    padding: 50px;
    opacity: 0.9;
    margin: 46px;
    border-radius: 0px 10px;
    width: 300px;
    height: 100vh;
  }

  @media (max-width: 992px) {
    .nav__menu ul  {
      display: block;
    }
    .cart-icon {

    top: 10px;
  }
 

    .navbar-container .lbl-menu {
      display: block;
    }

    .lbl-menu {
      width: 100%;
      margin-left: 90px;
      height: 30px;
      position: relative;
      cursor: pointer;
      justify-content: flex-end;
      margin-right: 15px;
      color: #000;
    }

    .btn-menu:checked ~ .menu {
      max-width: 990px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 80px;
      position: absolute;
    }

    .btn-menu:checked ~ .nav__menu ul {
      margin: 0 auto;
      width: 180px;
      height: 550px;
      display: flex;
      right: 0px;
      flex-direction: column;
      column-gap: 20px;
      padding: 20px 25px;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      background: #2b2b2b;
      opacity: 95%;
      background-size: contain;
      color: #ffff;
      top: 80px;
      z-index: 2;
      border: solid 1px;
      border-right: none;
      border-top: none;
      border-color: #f4511e;
      border-radius: 0px 0px 0px 10px;
      transition: all 0.7s;
    }

    .nav__menu li a {
      margin: 0 auto;
      color: #131313;
      justify-content: center;
      font-size: 22px;
    }

    .nav__menu li a:hover {
      color: #f4511e;
    }

    .navbar-container .logo h1 {
      font-family: "PT Sans", sans-serif;
      font-size: 20px;
      color: #fff;
      margin-left: 15px;
    }

    .header__main {
      max-width: 991.9px;
      margin: 0 auto;
      place-items: center;
    }
  }
  @media (max-width: 980px) {
    .nav__menu ul {
      display: none;
    }
  }

  @media (max-width: 981px) {
    .navbar-container .lbl-menu {
      display: none;
    }
  }

  @media (max-width: 980px) {
    .navbar-container .lbl-menu {
      display: flex;
      margin-right: 150px;
    }

    .lbl-menu {
      width: 100%;
      /* margin-left: 90px; */
      height: 23px;
      position: relative;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      padding: 5px;
    }

  }
`;
