import React, {memo, useState} from 'react'
import logo from './logo.png'
import './Header.scss'
import {Link} from "react-router-dom";
import LoginModal from "../Auth/LoginModal/LoginModal";
import RegisterModal from "../Auth/RegisterModal/RegisterModal";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../selectors/auth";
import {CHANGE_THEME} from "../../actions/general";

const Header = () => {

  const user = useSelector(selectUser);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <header className='header'>
        <div className="header__wrapper wrapper">
          <div className="header__logo">
            <Link to={'/'}>
              <img src={logo} alt=""/>
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to='/countries'>Tours by countries</Link>
              </li>
              {user
                ? <li>
                    <Link to='/cabinet'>{user.email}</Link>
                  </li>
                : <>
                    <li>
                      <span onClick={() => setIsLoginModalOpen(true)}>Увійти</span>
                    </li>
                    <li>
                      <span onClick={() => setIsRegisterModalOpen(true)}>Реєстрація</span>
                    </li>
                  </>
              }
            </ul>
          </nav>
        </div>
        <div className="switcher" onClick={() => dispatch({type: CHANGE_THEME})}/>
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