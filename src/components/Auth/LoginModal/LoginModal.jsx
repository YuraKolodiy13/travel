import React, {useState} from 'react';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Slide from "@mui/material/Slide";
import Button from "../../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_REQUEST} from "../../../actions/auth";
import {selectError} from "../../../selectors/auth";

const LoginModal = ({open, setIsModalOpen}) => {

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setState({
      email: '',
      password: ''
    })
  };

  const submitLogin = () => {
    dispatch({type: LOGIN_REQUEST, payload: state, callback: closeModal});
  };


  return (
    <Modal
      className='modal'
      data-testid='loginModal'
      open={open}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="down" in={open}>
        <div className='modal__content'>
          <h3 className="heading">Вхід до системи</h3>
          <ValidatorForm className='login__form' onSubmit={submitLogin}>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.email}
                  name='email'
                  type="email"
                  label='Email'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required', 'isEmail']}
                  errorMessages={['Обовязкове поле', 'email не валідний']}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.password}
                  name='password'
                  type='password'
                  label='Пароль'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
                {error && <p className='error'>{error.message}</p>}
              </div>
            </div>
            <Button type='submit' title='Увійти' color='primary'/>
          </ValidatorForm>
        </div>
      </Slide>
    </Modal>
  )
};

export default LoginModal;