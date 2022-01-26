import React from 'react';
import { render } from '@testing-library/react';
import HotelCard from "./HotelCard";

describe('list components', () => {

  const data = {
    "disablePromoCode": false,
    "HotType": 1,
    "EarlyType": 1,
    "RecommendedType": 1,
    "isHot": false,
    "isPromo": false,
    "isBestDeal": false,
    "LoadedDate": "2022-01-25T13:18:44.83+02:00",
    "operatorName": "Анекс Тур",
    "operatorIdInt": 102,
    "operatorId": "{3DF661B6-F4BB-4B95-AED1-9926925092F8}",
    "type": "plain",
    "cityFromCode": "LWO",
    "cityFromName": "Львов",
    "flyInclude": "true",
    "countryID": "25",
    "countryName": "Египет",
    "countryNameAccusativeCase": "в Египет",
    "checkIn": {"value": "2022-01-27T00:00:00+02:00", "hash": -1506999935},
    "region": {
      "RegionName": "Шарм-эль-Шейх",
      "ResortName": "Шарм-эль-Шейх",
      "RegionHash": 621,
      "ResortHash": 1486,
      "value": "Шарм-эль-Шейх Шарм-эль-Шейх",
      "hash": -2099355937
    },
    "hotel": {"hash": -1063992402, "value": "Desert View Sharm"},
    "hotelId": 109691,
    "hotelUrl": "/hotel/eg/desert-view-sharm",
    "hotelKey": "109691",
    "star": {"hash": 3, "value": "3"},
    "meal": {"hash": 1, "value": "Все включено (AI)"},
    "room": "Standard Room",
    "htplace": "DBL",
    "price": 410,
    "customPriceWd": 0,
    "customPriceWdUah": 0,
    "currency": "USD",
    "priceUAH": 12111,
    "nights": 7,
    "address": "Шарм-эль-Шейх",
    "photo": "https://img4.farvater.travel/mapkey/109691/0?size=catalog",
    "rate": "1",
    "adl": 2,
    "kids": 1,
    "ages": "1",
    "chd": 405,
    "isEarly": false,
    "SystemKey": "74m5707037035017660892c25",
    "othersAgr": null,
    "other": null,
    "isRecommended": false,
    "IsChoiceFarvater": false,
    "FarTourId": 117048032,
    "sort": 50,
    "IsFreePCRTest": false,
    "AdditionalInfo": null,
    "idsForText": {
      "roomId": 32,
      "htplaceId": 334006,
      "mealId": 1,
      "starId": 3,
      "countryid": 25,
      "longhotelId": 109691,
      "airportId": 5,
      "transferTypeId": 1,
      "touristsBits": 74,
      "reviewsCount": "0",
      "currencyId": 4
    },
    "redPriceUAH": 11964,
    "countOther": 1,
    "latitude": 27.8710159,
    "longitude": 34.3156351,
    "next": null,
    "prev": null,
    "tourFreeCancel": false,
    "isOtp": false,
    "HealthCertificate": false,
    "WorksIn2020": false,
    "promotionEndDate": null,
    "isLastSeats": false
  };


  test('list renders', () => {
    const {getByRole} = render(<HotelCard item={data}/>);
    expect(getByRole('list')).toBeInTheDocument();
  });

  test('list without data', () => {
    const {queryByRole} = render(<HotelCard />);
    expect(queryByRole('list')).toBeNull();
  });

  test('list snapshot', () => {
    const list = render(<HotelCard item={data}/>);
    expect(list).toMatchSnapshot();
  });
});
