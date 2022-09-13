import Homepage from "./Homepage";
import {render, screen} from '@testing-library/react';
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {hotToursMock} from "../../mock/hotTours";
import {SEARCH_FORM_REQUEST} from "../../actions/general";
import {DEFAULT_SEARCH_ALL_TOURS_VALUE, DEFAULT_SEARCH_VALUE} from "../../helpers/constants";
import {GET_HOT_TOURS_REQUEST, GET_RECOMMENDED_TOURS_REQUEST} from "../../actions/homepage";

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


  afterEach(() => {
    store.clearActions()
  })

  test('testing if request was launched', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage/>
        </MemoryRouter>
      </Provider>
      )
    expect(screen.getByText('Гарячі тури')).toBeInTheDocument();
  })

  test('check if requests were called', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage/>
        </MemoryRouter>
      </Provider>
    );

    const actions = store.getActions();

    expect(actions).toEqual([
      {type: SEARCH_FORM_REQUEST, payload: DEFAULT_SEARCH_VALUE},
      {type: GET_HOT_TOURS_REQUEST, payload: DEFAULT_SEARCH_ALL_TOURS_VALUE},
      {type: GET_RECOMMENDED_TOURS_REQUEST, payload: DEFAULT_SEARCH_ALL_TOURS_VALUE},
    ])
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