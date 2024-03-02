

import React,{ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}


const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default Button

export type {ButtonProps}
