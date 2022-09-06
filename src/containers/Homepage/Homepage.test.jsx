import Homepage from "./Homepage";
import {render} from '@testing-library/react';
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {hotToursMock} from "../../mock/hotTours";

describe('testing homepage', () => {
  const mockStore = configureStore();
  let store = mockStore({
    general: {
      loading: false,
      flights: {},
      searchForm: {}
    },
    homepage: {
      hotTours: hotToursMock.results,
      recommendedTours: [],
    }
  })

  test('testing if request was launched', () => {
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