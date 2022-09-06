import {render} from '@testing-library/react';
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

})