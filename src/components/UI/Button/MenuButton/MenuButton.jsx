import React from "react";
import MenuButtonWrapper from "./MenuButtonStyles";
import {AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
     <AiOutlineMenuFold />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
     <AiOutlineMenuUnfold />
    </MenuButtonWrapper>
  );
}

export default MenuButton;