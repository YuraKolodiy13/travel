import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from "./Header";
import {MemoryRouter} from "react-router";
import userEvent from "@testing-library/user-event/dist";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

describe('testing header component', () => {

  const mockStore = configureStore();

  const store = mockStore({
    auth: {
      user: null,
      error: false,
    }
  })

  test('check if exist sign in/sign up buttons', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Увійти')).toBeInTheDocument()
    expect(screen.getByText('Реєстрація')).toBeInTheDocument()
  })

  test('check if login modal exists button after click', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header/>
        </MemoryRouter>
      </Provider>
    )
    expect(screen.queryByTestId('loginModal')).toBeNull()
    userEvent.click(screen.getByText('Увійти'))
    expect(screen.queryByTestId('loginModal')).toBeInTheDocument()
  })

  test('check if register modal exists after button click', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header/>
        </MemoryRouter>
      </Provider>
    )
    expect(screen.queryByTestId('registerModal')).toBeNull()
    userEvent.click(screen.getByText('Реєстрація'))
    expect(screen.queryByTestId('registerModal')).toBeInTheDocument()
  })

})