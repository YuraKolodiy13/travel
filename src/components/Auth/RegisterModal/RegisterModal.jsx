import React, {useState} from 'react';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Slide from "@mui/material/Slide";
import Button from "../../Button/Button";

const RegisterModal = ({open, setIsModalOpen}) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setState({
      name: '',
      email: '',
      password: ''
    })
  };


  return (
    <Modal
      className='modal'
      data-testid='registerModal'
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
          <h3 className="heading">Створити новий аккаунт</h3>
          <ValidatorForm className='login__form' onSubmit={() => {}}>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.name}
                  name='name'
                  type="text"
                  label="Ім'я"
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.email}
                  name='email'
                  type="email"
                  label='Email'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
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
              </div>
            </div>
            <Button type='submit' title='Створити' color='primary'/>
          </ValidatorForm>
        </div>
      </Slide>
    </Modal>
  )
};

export default RegisterModal;