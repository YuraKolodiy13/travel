import React from 'react';
import {render} from '@testing-library/react';
import HotelCard from "./HotelCard";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {MemoryRouter} from "react-router";
import {recommendedToursMock} from "../../mock/recommendedTours";
import {flightsMock} from "../../mock/flights";

describe('list components', () => {

  const data = recommendedToursMock.results[0];
  const flights = flightsMock.data.flights;
  const mockStore = configureStore();

  test('list renders', () => {
    const {getByRole} = render(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <HotelCard item={data} flights={flights}/>
        </MemoryRouter>
      </Provider>
    );
    expect(getByRole('list')).toBeInTheDocument();
  });

  test('list without data', () => {
    const {queryByRole} = render(
      <Provider store={mockStore()}>
        <HotelCard/>
      </Provider>
    );
    expect(queryByRole('list')).toBeNull();
  });

  test('list snapshot', () => {
    const list = render(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <HotelCard item={data} flights={flights}/>
        </MemoryRouter>
      </Provider>
    );
    expect(list).toMatchSnapshot();
  });
});
