import React, {memo} from 'react'
import './Button.scss'
const Button = ({title, color, doAction, type, disabled}) => {
  return (
    <button type={type} className={`button ${color}`} onClick={doAction} disabled={disabled}>
      {title && <span data-testid='buttonTitle'>{title}</span>}
    </button>
  )
};

export default memo(Button);