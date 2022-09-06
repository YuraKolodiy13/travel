import Search from "./Search";
import React from "react";
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router";
import userEvent from "@testing-library/user-event/dist";
import {searchFormMock} from "../../mock/searchForm";

describe('testing search component', () => {

  const mockStore = configureStore();
  const store = mockStore({
    general: {
      searchForm: searchFormMock.data,
    }
  })

  test('search exists', () => {
    const {getByText, debug} = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
      )
    // debug()
    expect(getByText('Найти')).toBeInTheDocument()
  })

  test('search launch request', () => {
    const {getByText} = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
      )
    userEvent.click(getByText('Найти'))
    // expect(store.dispatch).toHaveBeenCalledTimes(1);


  })

  test('search functionality', () => {
    const {getByText} = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    )
    userEvent.click(getByText('2 туриста'))
    // expect(store.dispatch).toHaveBeenCalledTimes(1);


  })

})