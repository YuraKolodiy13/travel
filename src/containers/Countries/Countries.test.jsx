import {render, screen} from '@testing-library/react';
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {searchFormMock} from "../../mock/searchForm";
import Countries from "./Countries";
import userEvent from "@testing-library/user-event/dist";

describe('testing Countries page', () => {

  const mockStore = configureStore();

  const store = mockStore({
    general: {
      flights: {},
      searchForm: searchFormMock.data
    }
  })


  test('render page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Countries/>
        </MemoryRouter>
      </Provider>
      );
    expect(screen.getByText('Популярні країни')).toBeInTheDocument();
    expect(screen.getByText('Інші країни')).toBeInTheDocument();
    userEvent.click(screen.getByText('Показати більше'));
    expect(screen.getByText('Показати менше')).toBeInTheDocument();
    expect(screen.queryByText('Показати більше')).not.toBeInTheDocument();
  })

})