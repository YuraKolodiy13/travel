import React from 'react'
import logo from './logo.png'
import './Header.scss'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className="header__wrapper wrapper">
        <div className="header__logo">
          <Link to={'/'}>
            <img src={logo} alt=""/>
          </Link>
        </div>
        <div className="header__user">
          <Link to='/login'>
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;