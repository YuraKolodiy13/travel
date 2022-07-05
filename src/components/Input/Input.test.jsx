import React from 'react';
import { render } from '@testing-library/react';
import Input from "./Input";
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('input components', () => {

  test('check onChange function', () => {
    const {getByRole} = render(<Input value='' onChange={onChange} />);
    userEvent.type(getByRole('textbox'), '331')
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  test('check filled styles', () => {
    const {getByRole} = render(<Input value='jgh' onChange={onChange} />);
    expect(getByRole('textbox')).toHaveClass('filled');
  });

});
