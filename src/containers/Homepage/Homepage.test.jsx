import Homepage from "./Homepage";
import {render} from '@testing-library/react';
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import axios from 'axios';

describe('testing homepage', () => {
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

  test('testing if requests was launched', () => {
    // axios.get.mockReturnValue(store);
    const {getByText} = render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage/>
        </MemoryRouter>
      </Provider>
      )
    expect(getByText('Гарячі тури')).toBeInTheDocument();
  })

  test('snapshot', () => {
    const homepage = render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage/>
        </MemoryRouter>
      </Provider>
      )
    expect(homepage).toMatchSnapshot()
  })

})