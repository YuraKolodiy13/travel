import {render, fireEvent} from '@testing-library/react';
import CountryCard from "./CountryCard";
import React from "react";

describe('testing CountryCard component', () => {

  test('testing render', () => {
    const {getByRole} = render(<CountryCard name='test' imgSrc='test'/>)
    expect(getByRole('listitem')).toBeInTheDocument();
  })

  test('testing render without props', () => {
    const {queryByRole} = render(<CountryCard/>)
    expect(queryByRole('listitem')).toBeNull();
  })

  test('testing img onError func', () => {
    const {getByRole} = render(<CountryCard name='test' imgSrc='test'/>);
    fireEvent.error(getByRole('img'));
    expect(getByRole('img')).toHaveAttribute('src', '/no-avatar.jpg')
  })

})