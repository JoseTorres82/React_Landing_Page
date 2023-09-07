import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  max-width: 100vw;
  height: fit-content;
  margin: 0 auto;
  width: 100%;
  border-top: solid 1px #6e6043;

  .footer {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    background: #000;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 35px;
    z-index: 3;
    bottom: 0;
    display: block;
    margin-top: 5px;
  }
  .footer .footer-name {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    color: #efefef;
    text-align: center;
    margin-bottom: 40px;
  }
  .footer-links {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 200px;
    padding: 10px;
    gap: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-links a {
    color: #f5f5ff;
    font-family: "PT Sans", sans-serif;
    transition: all ease-in-out 0.3s;
  }

  .footer-links a:hover {
    transform: scale(1.1);
    color: darkgrey;
    font-style: bold;
  }
  .footer .grupo-1 {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    column-gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 45px 0px;
  }

  .footer .grupo-1 .box h2 {
    color: #ffff;
    margin-bottom: 25px;
    font-size: 20px;
    font-family: "PT sans", cursive;
    /* margin-left: 15px; */
    text-align: center;
  }

  .footer .grupo-1 .box .footer__contacto {
    color: #efefef;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-family: "PT Sans", sans-serif;
  }

  .footer .grupo-1 .box .redes a {
    max-width: fit-content;
    margin: 0 auto;
    width: 100%;
    height: 40px;
    padding: 15px;
    display: inline-block;
    text-align: center;
    font-size: 35px;
    border-radius: 50%;
    color: #f2b28d;
    transition: all ease 0.2s;
  }

  .footer .grupo-1 .box .redes .ig :hover,
  .footer .grupo-1 .box .redes .fb :hover {
    color: #fefefe;
    box-shadow: 1px 2px 25px #2699a6;
    object-position: center;
  }

  .footer .grupo-2 {
    color: #ffffff;
    padding: 15px 10px;
    text-align: center;
  }

  .footer .grupo-2 small {
    font-size: 15px;
    font-family: "Pt Sans", sans-serif;
  }

  .footer .grupo-1 iframe {
    width: 300px;
    height: 250px;
  }
  @media (max-width: 980px) {
    .footer-links {
      display: grid;
      justify-items: flex-start;
    }
  }
`;
