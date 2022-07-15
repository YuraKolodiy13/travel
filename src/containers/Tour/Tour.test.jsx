import {render} from '@testing-library/react';
import Tour from "./Tour";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";

describe('testing Tour page', () => {

  const mockStore = configureStore();
  const store = mockStore({general: {
      loading: false,
      searchForm: {},
      hash: '',
      hotels: null,
      tour: {},
      otherTours: [],
      hotTours: [],
      recommendedTours: [],
      flights: {}
    }})

  test('render Tour page', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MemoryRouter>
          <Tour/>
        </MemoryRouter>
      </Provider>
      );
    expect(getByTestId('tour-page')).toBeInTheDocument()
  })

})