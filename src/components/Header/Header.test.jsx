import React from 'react';
import {render} from '@testing-library/react';
import Header from "./Header";
import {MemoryRouter} from "react-router";
import userEvent from "@testing-library/user-event/dist";

describe('testing header component', () => {

  test('check if exist sign in/sign up buttons', () => {
    const {getByText} = render(<Header/>, {wrapper: MemoryRouter})
    expect(getByText('Увійти')).toBeInTheDocument()
    expect(getByText('Реєстрація')).toBeInTheDocument()
  })

  test('check if login modal exists button after click', () => {
    const {getByText, queryByTestId} = render(<Header/>, {wrapper: MemoryRouter})
    expect(queryByTestId('loginModal')).toBeNull()
    userEvent.click(getByText('Увійти'))
    expect(queryByTestId('loginModal')).toBeInTheDocument()
  })

  test('check if register modal exists after button click', () => {
    const {getByText, queryByTestId} = render(<Header/>, {wrapper: MemoryRouter})
    expect(queryByTestId('registerModal')).toBeNull()
    userEvent.click(getByText('Реєстрація'))
    expect(queryByTestId('registerModal')).toBeInTheDocument()
  })

})