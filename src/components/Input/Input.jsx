import React from "react";
import './Input.scss';

const Input = ({value, onChange}) => {
  return (
    <label>
      <input
        className={value.length ? 'filled' : ''}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Input;