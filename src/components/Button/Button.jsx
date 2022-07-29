import React from 'react'
import './Button.scss'
const Button = ({title, color, doAction, type, disabled}) => {
  return (
    <button type={type} className={`button ${color}`} onClick={doAction} disabled={disabled}>
      <span>{title}</span>
    </button>
  )
};

export default Button;