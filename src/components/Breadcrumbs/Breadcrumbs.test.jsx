import {render, screen} from '@testing-library/react';
import Breadcrumbs from "./Breadcrumbs";
import React from "react";
import {MemoryRouter} from "react-router";

describe('testing Breadcrumbs component', () => {

  test('render component without props', () => {
    render(<Breadcrumbs/>, {wrapper: MemoryRouter});
    expect(screen.getByText('Home')).toBeInTheDocument();
  })

  test('render component with props', () => {
    render(<Breadcrumbs path={['test1', 'test2']}/>, {wrapper: MemoryRouter});
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByTestId('active-el')).toBeInTheDocument();
  })

})