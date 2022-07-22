import {render} from '@testing-library/react';
import Breadcrumbs from "./Breadcrumbs";
import React from "react";
import {MemoryRouter} from "react-router";

describe('testing Breadcrumbs component', () => {

  test('render component without props', () => {
    const {getByText} = render(<Breadcrumbs/>, {wrapper: MemoryRouter});
    expect(getByText('Home')).toBeInTheDocument();
  })

  test('render component with props', () => {
    const {getAllByRole} = render(<Breadcrumbs path={['test1', 'test2']}/>, {wrapper: MemoryRouter});
    expect(getAllByRole('listitem')).toHaveLength(3);
  })

})