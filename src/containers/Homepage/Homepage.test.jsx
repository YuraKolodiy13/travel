import Homepage from "./Homepage";
import {render} from '@testing-library/react';
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import axios from 'axios';

describe('testing homepage', () => {
  const mockStore = configureStore();
  let store = mockStore({general: {
      loading: false,
      searchForm: {},
      hash: '',
      hotels: null,
      tour: {},
      otherTours: [],
      hotTours: [ {
        disablePromoCode: false,
        HotType: 1,
        EarlyType: 1,
        RecommendedType: 1,
        isHot: false,
        isPromo: false,
        isBestDeal: false,
        LoadedDate: '2020-01-01T00:00:00+02:00',
        operatorName: 'JoinUp',
        operatorIdInt: 110,
        operatorId: '{JoinUpNativeApi}',
        type: 'plain',
        cityFromCode: 'KBP',
        cityFromName: 'Киев',
        flyInclude: 'true',
        countryID: '25',
        countryName: 'Египет',
        countryNameAccusativeCase: 'в Египет',
        checkIn: {
          value: '2022-09-13T00:00:00+03:00',
          hash: -1460628963
        },
        region: {
          RegionName: 'Шарм-эль-Шейх',
          ResortName: 'Шарм-эль-Шейх',
          RegionHash: 621,
          ResortHash: 1486,
          value: 'Шарм-эль-Шейх Шарм-эль-Шейх',
          hash: -2099355937
        },
        hotel: {
          hash: -641217413,
          value: 'Il Mercato Hotel (ex.Iberotel Il Mercato)'
        },
        hotelId: 34256,
        hotelUrl: '/hotel/eg/il-mercato-hotel',
        hotelKey: '34256',
        star: {
          hash: 7,
          value: '5'
        },
        meal: {
          hash: 1,
          value: 'Все включено (AI)'
        },
        room: 'Standard Room',
        htplace: 'DBL',
        price: 1561,
        customPriceWd: 0,
        customPriceWdUah: 0,
        currency: 'USD',
        priceUAH: 45660,
        nights: 14,
        address: 'Шарм-эль-Шейх',
        photo: 'https://img4.farvater.travel/mapkey/34256/0?size=catalog',
        rate: '8',
        adl: 2,
        kids: 0,
        ages: '',
        chd: 0,
        isEarly: false,
        SystemKey: '2m5136450731218604758c25',
        othersAgr: [],
        other: [],
        isRecommended: true,
        IsChoiceFarvater: false,
        FarTourId: 72265714,
        sort: 0,
        IsFreePCRTest: false,
        AdditionalInfo: null,
        idsForText: {
          roomId: 32,
          htplaceId: 334006,
          mealId: 1,
          starId: 7,
          countryid: 25,
          longhotelId: 34256,
          airportId: 4,
          transferTypeId: 1,
          touristsBits: 2,
          reviewsCount: '329',
          currencyId: 4
        },
        redPriceUAH: 45660,
        countOther: 1,
        latitude: 27.8633414,
        longitude: 34.3074194,
        next: null,
        prev: null,
        tourFreeCancel: false,
        isOtp: true,
        HealthCertificate: false,
        WorksIn2020: false,
        promotionEndDate: null,
        isLastSeats: false
      }],
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