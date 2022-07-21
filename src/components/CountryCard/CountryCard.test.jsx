import {render, fireEvent} from '@testing-library/react';
import CountryCard from "./CountryCard";
import React from "react";
import {MemoryRouter} from "react-router";

describe('testing CountryCard component', () => {

  test('testing render', () => {
    const {getByRole} = render(<CountryCard name='test' imgSrc='test'/>, {wrapper: MemoryRouter})
    expect(getByRole('listitem')).toBeInTheDocument();
  })

  test('testing render without props', () => {
    const {queryByRole} = render(<CountryCard/>, {wrapper: MemoryRouter})
    expect(queryByRole('listitem')).toBeNull();
  })

  test('testing img onError func', () => {
    const {getByRole} = render(<CountryCard name='test' imgSrc='test'/>, {wrapper: MemoryRouter});
    fireEvent.error(getByRole('img'));
    expect(getByRole('img')).toHaveAttribute('src', '/no-avatar.jpg')
  })

})