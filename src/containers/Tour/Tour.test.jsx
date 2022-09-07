import {render, screen} from '@testing-library/react';
import Tour from "./Tour";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import {tourMock} from "../../mock/tour";
import {reviewsMock} from "../../mock/reviews";

describe('testing Tour page', () => {

  const mockStore = configureStore();
  const store = mockStore({
    general: {
      flights: {}
    },
    tour: {
      loading: false,
      tourInfo: tourMock,
      otherTours: [],
      reviews: reviewsMock
    }
  })

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

  test('reviews should be on the page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Tour/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Reviews of tourists')).toBeInTheDocument();
    expect(screen.getByText('Завантажити більше')).toBeInTheDocument();
    expect(screen.getByText('Опис готелю')).toBeInTheDocument();
  })

})