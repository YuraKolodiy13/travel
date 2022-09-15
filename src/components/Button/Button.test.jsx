import {render, screen} from '@testing-library/react';
import Button from "./Button";
import React from "react";
import userEvent from "@testing-library/user-event/dist";

describe('testing Button component', () => {

  test('testing with title', () => {
    render(<Button title='test'/>)
    expect(screen.getByText('test')).toBeInTheDocument();
  })

  test('testing without title', () => {
    render(<Button title=''/>)
    expect(screen.queryByTestId('buttonTitle')).toBeNull();
  })

  test('testing disabled prop', () => {
    render(<Button disabled/>)
    expect(screen.getByRole('button')).toBeDisabled();
  })

  test('testing disabled prop', () => {
    const onClick = jest.fn();
    render(<Button doAction={onClick}/>);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  })

})