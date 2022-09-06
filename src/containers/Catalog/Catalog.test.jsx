import {render, screen} from '@testing-library/react';
import Catalog from "./Catalog";
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {searchFormMock} from "../../mock/searchForm";
import {availableToursMock} from "../../mock/availableTours";
import {findToursFiltersMock} from "../../mock/findToursFilters";

describe('testing Catalog page', () => {

  const mockStore = configureStore();

  const store = mockStore({
    general: {
      flights: {},
      searchForm: searchFormMock.data
    },
    catalog: {
      loading: false,
      hash: '',
      hotels: availableToursMock.data,
      filters: findToursFiltersMock.data,
    }
  })


  test('render page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Catalog/>
        </MemoryRouter>
      </Provider>
      );
    expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
  })

  test('if more than 10 hotels should be load more btn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Catalog/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText('Показати більше')).toBeInTheDocument()
  })
})