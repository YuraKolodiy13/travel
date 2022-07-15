import React, {memo, useState} from 'react'
import logo from './logo.png'
import './Header.scss'
import {Link} from "react-router-dom";
import LoginModal from "../Auth/LoginModal/LoginModal";
import RegisterModal from "../Auth/RegisterModal/RegisterModal";

const Header = () => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const toggle = () => {
    document.querySelector('.App').classList.toggle('dark-mode-active');
  }

  return (
    <>
      <header className='header'>
        <div className="header__wrapper wrapper">
          <div className="header__logo">
            <Link to={'/'}>
              <img src={logo} alt=""/>
            </Link>
          </div>
          <ul className="header__user">

            <li>
              <span onClick={() => setIsLoginModalOpen(true)}>Увійти</span>
            </li>
            <li>
              <span onClick={() => setIsRegisterModalOpen(true)}>Реєстрація</span>
            </li>

          </ul>
        </div>
        <div className="switcher" onClick={toggle}/>
        <div className="dark-mode-container">
          <div className="dark-mode"/>
        </div>
      </header>
      <LoginModal
        open={isLoginModalOpen}
        setIsModalOpen={setIsLoginModalOpen}
      />
      <RegisterModal
        open={isRegisterModalOpen}
        setIsModalOpen={setIsRegisterModalOpen}
      />
    </>
  )
};

export default memo(Header);
// export default Header;