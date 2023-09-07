import React, { useState } from "react";
import { HeaderWrapper } from "../Header/HeaderStyles";
import { HeaderContainer } from "../Header/HeaderStyles";
import Navbar  from "../../components/Navbar/Navbar";


function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
