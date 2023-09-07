import React from 'react'
import { ButtonAddStyled}  from './ButtonAddStyled'

const ButtonAdd = ({
    children,
    radius = '32',
    disabled = false
}) => {
  return (
    <ButtonAddStyled
        whileTap={{scale: 0.95}}
        disabled={disabled}
        radius={radius}
    >
        {children}
    </ButtonAddStyled>
  )
}

export default ButtonAdd