import React from "react";


import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FooterContainerStyled } from "./FooterStyles";

const Footer = () => {
  return (
   <FooterContainerStyled>
    <footer >
            <div className="footer">
                <div className="grupo-1">
                    <div className="box">
                        <div className="footer-name">
                        <h1>Buenas Olas Store</h1>
                        </div>
                        <div className="box">
                            <div className="redes">
                                <a href="#" className="fb"><FaFacebook/></a>
                                <a href="#" className="ig"><FaInstagramSquare/></a> 
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                  <a href="#">Términos y condiciones</a><a href="#">Cambios y devoluciones</a><a href="#">Cuidados</a><a href="#">Nosotros</a><a href="#">Contacto</a>
                </div>
                
                <div className="grupo-2">
                    
                    <small>&copy; 2023 <b>Buenas Olas Store - Mar del Plata BA-ARG</b> - Todos los derechos reservados. </small>
                </div>
    
            </div>
        </footer>

   </FooterContainerStyled>
  );
};
export default Footer;
