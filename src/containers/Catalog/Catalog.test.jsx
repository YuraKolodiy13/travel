import {render, screen} from '@testing-library/react';
import Catalog from "./Catalog";
import React from "react";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

describe('testing Catalog page', () => {

  const mockStore = configureStore();

  const store = mockStore({general: {
      loading: false,
      searchForm: {
        current: '',
        cityFrom: {
          options: [
            {
              id: 4,
              name: 'Києва',
              code: 'kbp',
              town: 'Київ'
            },
            {
              id: 5,
              name: 'Львова',
              code: 'lwo',
              town: 'Львів'
            },
            {
              id: 11,
              name: 'Дніпра',
              code: 'dnk',
              town: 'Дніпро'
            },
            {
              id: 7,
              name: 'Одеси',
              code: 'ods',
              town: 'Одеса'
            },
            {
              id: 13,
              name: 'Без перельоту',
              code: 'non',
              town: 'Без перельоту'
            },
            {
              id: 22,
              name: 'Риги',
              code: 'rix',
              town: 'Рига'
            },
            {
              id: 23,
              name: 'Вільнюса',
              code: 'vno',
              town: 'Вільнюс'
            },
            {
              id: 24,
              name: 'Кишинева',
              code: 'kiv',
              town: 'Кишинів'
            },
            {
              id: 25,
              name: 'Таллінна',
              code: 'tll',
              town: 'Таллінн'
            },
            {
              id: 26,
              name: 'Алмати',
              code: 'ala',
              town: 'Алмати'
            },
            {
              id: 27,
              name: 'Нур-Султана',
              code: 'nqz',
              town: 'Риги'
            },
            {
              id: 28,
              name: 'Варшави',
              code: 'waw',
              town: 'Варшава'
            },
            {
              id: 29,
              name: 'Любліна',
              code: 'luz',
              town: 'Люблін'
            },
            {
              id: 30,
              name: 'Жешува',
              code: 'rze',
              town: 'Жешув'
            }
          ],
          checkedModel: {
            id: 5,
            name: 'Львова',
            code: 'lwo',
            town: 'Львів'
          }
        },
        destination: {
          options: {
            countries: {
              popular: [
                {
                  id: 83,
                  name: 'Туреччина',
                  alpha2: 'TR'
                },
                {
                  id: 25,
                  name: 'Єгипет',
                  alpha2: 'EG'
                },
                {
                  id: 59,
                  name: 'ОАЕ',
                  alpha2: 'AE'
                },
                {
                  id: 81,
                  name: 'Танзанія',
                  alpha2: 'TZ'
                },
                {
                  id: 23,
                  name: 'Домініканська республіка',
                  alpha2: 'DO'
                }
              ],
              others: [
                {
                  id: 33,
                  name: 'Греція',
                  alpha2: 'GR'
                },
                {
                  id: 80,
                  name: 'Таїланд',
                  alpha2: 'TH'
                },
                {
                  id: 44,
                  name: 'Італія',
                  alpha2: 'IT'
                },
                {
                  id: 21,
                  name: 'Кіпр',
                  alpha2: 'CY'
                },
                {
                  id: 39,
                  name: 'Індія',
                  alpha2: 'IN'
                },
                {
                  id: 42,
                  name: 'Іспанія',
                  alpha2: 'ES'
                },
                {
                  id: 8,
                  name: 'Болгарія',
                  alpha2: 'BG'
                },
                {
                  id: 37,
                  name: 'Хорватія',
                  alpha2: 'HR'
                },
                {
                  id: 55,
                  name: 'Чорногорія',
                  alpha2: 'ME'
                },
                {
                  id: 5,
                  name: 'Австрія',
                  alpha2: 'AT'
                },
                {
                  id: 28,
                  name: 'Франція',
                  alpha2: 'FR'
                },
                {
                  id: 82,
                  name: 'Туніс',
                  alpha2: 'TN'
                },
                {
                  id: 40,
                  name: 'Індонезія',
                  alpha2: 'ID'
                },
                {
                  id: 51,
                  name: 'Мальдіви',
                  alpha2: 'MV'
                },
                {
                  id: 74,
                  name: 'Словаччина',
                  alpha2: 'SK'
                },
                {
                  id: 84,
                  name: 'Україна',
                  alpha2: 'UA'
                },
                {
                  id: 34,
                  name: 'Грузія',
                  alpha2: 'GE'
                },
                {
                  id: 115,
                  name: 'Албанія',
                  alpha2: 'AL'
                },
                {
                  id: 0,
                  name: 'Андорра',
                  alpha2: 'AD'
                },
                {
                  id: 20,
                  name: 'Куба',
                  alpha2: 'CU'
                },
                {
                  id: 63,
                  name: 'Польща',
                  alpha2: 'PL'
                },
                {
                  id: 54,
                  name: 'Мексика',
                  alpha2: 'MX'
                },
                {
                  id: 64,
                  name: 'Португалія',
                  alpha2: 'PT'
                },
                {
                  id: 43,
                  name: 'Ізраїль',
                  alpha2: 'IL'
                },
                {
                  id: 86,
                  name: 'В\'єтнам',
                  alpha2: 'VN'
                },
                {
                  id: 27,
                  name: 'Фінляндія',
                  alpha2: 'FI'
                },
                {
                  id: 30,
                  name: 'Німеччина',
                  alpha2: 'DE'
                },
                {
                  id: 87,
                  name: 'Угорщина',
                  alpha2: 'HU'
                },
                {
                  id: 14,
                  name: 'Чехія',
                  alpha2: 'CZ'
                },
                {
                  id: 41,
                  name: 'Йорданія',
                  alpha2: 'JO'
                },
                {
                  id: 53,
                  name: 'Маврикій',
                  alpha2: 'MU'
                },
                {
                  id: 52,
                  name: 'Малайзія',
                  alpha2: 'MY'
                },
                {
                  id: 68,
                  name: 'Сейшели',
                  alpha2: 'SC'
                },
                {
                  id: 75,
                  name: 'Словенія',
                  alpha2: 'SI'
                },
                {
                  id: 105,
                  name: 'Марокко',
                  alpha2: 'MA'
                },
                {
                  id: 73,
                  name: 'Сінгапур',
                  alpha2: 'SG'
                },
                {
                  id: 47,
                  name: 'Кенія',
                  alpha2: 'KE'
                },
                {
                  id: 101,
                  name: 'Литва',
                  alpha2: 'LT'
                },
                {
                  id: 104,
                  name: 'Естонія',
                  alpha2: 'EE'
                },
                {
                  id: 118,
                  name: 'Катар',
                  alpha2: 'QA'
                },
                {
                  id: 11,
                  name: 'Камбоджа',
                  alpha2: 'KH'
                },
                {
                  id: 35,
                  name: 'Нідерланди',
                  alpha2: 'NL'
                },
                {
                  id: 100,
                  name: 'Латвія',
                  alpha2: 'LV'
                },
                {
                  id: 91,
                  name: 'Лаос',
                  alpha2: 'LA'
                }
              ]
            },
            resorts: [],
            hotels: [],
            countryResorts: [],
            regionResorts: null
          },
          checkedModel: {
            country: null,
            resorts: [],
            hotels: [],
            queryString: ''
          }
        },
        nights: {
          options: {
            minDays: 1,
            maxDays: 15,
            maxDaysRange: 5
          },
          checkedModel: {
            from: {
              id: 7,
              name: '7',
              code: null
            },
            till: {
              id: 9,
              name: '9',
              code: null
            }
          },
          defaultModel: {
            from: {
              id: 7,
              name: '7',
              code: null
            },
            till: {
              id: 9,
              name: '9',
              code: null
            }
          }
        },
        tourists: {
          options: {
            maxAdults: 5,
            maxKids: 4,
            maxAge: 16
          },
          checkedModel: {
            adult: {
              id: 2,
              name: '2',
              code: null
            },
            kids: {
              id: 0,
              name: '0',
              code: null
            },
            ages: []
          }
        },
        date: {
          options: {
            date: '2022-07-12T00:00:00+03:00',
            checked: true,
            checkboxDays: 3,
            min: '2022-07-01T00:00:00+03:00',
            max: '2023-07-01T00:00:00+03:00',
            disabled: [
              '2022-07-11T00:00:00+03:00'
            ]
          },
          checkedModel: {
            date: '2022-07-25T00:00:00+03:00',
            checked: false,
            minus: 7,
            plus: 0
          },
          defaultModel: {
            date: '2022-07-21T00:00:00+03:00',
            checked: true,
            minus: 3,
            plus: 3
          },
          disabled: []
        },
        stars: {
          options: [
            {
              id: -1,
              name: 'Будь-яка категорія',
              code: null
            },
            {
              id: 1,
              name: '2',
              code: null
            },
            {
              id: 3,
              name: '3',
              code: null
            },
            {
              id: 4,
              name: '4',
              code: null
            },
            {
              id: 7,
              name: '5',
              code: null
            },
            {
              id: 9,
              name: 'Готель бунгального типу 4 *',
              code: null
            },
            {
              id: 11,
              name: 'Готель бунгального типу 5 *',
              code: null
            },
            {
              id: 10,
              name: 'Вілла',
              code: null
            },
            {
              id: 12,
              name: 'Апартаменти',
              code: null
            }
          ],
          checkedModel: [
            {
              id: 3,
              name: '3',
              code: null
            },
            {
              id: 4,
              name: '4',
              code: null
            },
            {
              id: 7,
              name: '5',
              code: null
            }
          ]
        },
        meals: {
          options: [
            {
              id: -1,
              name: 'Будь-яке',
              code: null
            },
            {
              id: 6,
              name: 'Без харчування (RO)',
              code: 'RO'
            },
            {
              id: 0,
              name: 'Сніданок (BB)',
              code: 'BB'
            },
            {
              id: 5,
              name: 'Сніданок + вечеря (HB)',
              code: 'HB'
            },
            {
              id: 4,
              name: 'Сніданок + обід + вечеря (FB)',
              code: 'FB'
            },
            {
              id: 1,
              name: 'Все включено (AI)',
              code: 'AI'
            },
            {
              id: 2,
              name: 'Ультра все включено (UAI)',
              code: 'UAI'
            }
          ],
          checkedModel: [
            {
              id: 0,
              name: 'Сніданок (BB)',
              code: 'BB'
            },
            {
              id: 1,
              name: 'Все включено (AI)',
              code: 'AI'
            },
            {
              id: 2,
              name: 'Ультра все включено (UAI)',
              code: 'UAI'
            },
            {
              id: 4,
              name: 'Сніданок + обід + вечеря (FB)',
              code: 'FB'
            },
            {
              id: 5,
              name: 'Сніданок + вечеря (HB)',
              code: 'HB'
            },
            {
              id: 6,
              name: 'Без харчування (RO)',
              code: 'RO'
            }
          ]
        }
      },
      hash: '',
      hotels: {
        "hash": "550942fc-8ac0-0d58-521c-f2c8ef0540d2",
        "offset": 1,
        "totalItems": 11,
        "cacheIsActual": false,
        "hasResult": true,
        "synkTime": 5000,
        "sResult": [
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-14T00:00:00+03:00",
              "hash": 1452831922
            },
            "region": {
              "RegionName": "Хургада",
              "ResortName": "Хургада",
              "RegionHash": 620,
              "ResortHash": 1482,
              "value": "Хургада Хургада",
              "hash": -717269954
            },
            "hotel": {
              "hash": 803247614,
              "value": "Sand Beach Hotel"
            },
            "hotelId": 34015,
            "hotelUrl": "/hotel/eg/sand-beach-hotel",
            "hotelKey": "34015",
            "star": {
              "hash": 3,
              "value": "3"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "STANDARD ROOM",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2149,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 60387,
            "nights": 7,
            "address": "Хургада",
            "photo": "https://img4.farvater.travel/mapkey/34015/0?size=catalog",
            "rate": "7,8",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2091,
            "isEarly": false,
            "SystemKey": "74p2946115219759254337c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 74391747,
            "sort": 5,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 51,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 3,
              "countryid": 25,
              "longhotelId": 34015,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "33",
              "currencyId": 4
            },
            "redPriceUAH": 58758,
            "countOther": 1,
            "latitude": 27.2602948,
            "longitude": 33.8207205,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-13T00:00:00+03:00",
              "hash": 861265522
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": 1923568239,
              "value": "VIKING CLUB"
            },
            "hotelId": 56506,
            "hotelUrl": "/hotel/eg/viking-club",
            "hotelKey": "56506",
            "star": {
              "hash": 4,
              "value": "4"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "Standard Room",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2156,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 60584,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/56506/0?size=catalog",
            "rate": "8,4",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2100,
            "isEarly": false,
            "SystemKey": "74p1487894322798251616c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 64039085,
            "sort": 10,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 32,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 4,
              "countryid": 25,
              "longhotelId": 56506,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "1",
              "currencyId": 4
            },
            "redPriceUAH": 59010,
            "countOther": 1,
            "latitude": 27.911577,
            "longitude": 34.31653,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:13.443+03:00",
            "operatorName": "Alliance",
            "operatorIdInt": 119,
            "operatorId": "{AllianceNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-06T00:00:00+03:00",
              "hash": 235760631
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": -850615067,
              "value": "Badawia Resort"
            },
            "hotelId": 34018,
            "hotelUrl": "/hotel/eg/badawia-resort",
            "hotelKey": "34018",
            "star": {
              "hash": 3,
              "value": "3"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "STANDARD ROOM",
            "htplace": "2 AD",
            "price": 1409,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 59108,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/34018/0?size=catalog",
            "rate": "4,8",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 0,
            "isEarly": false,
            "SystemKey": "74p7685322792910905001c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 51082395,
            "sort": 15,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 51,
              "htplaceId": 2003989,
              "mealId": 1,
              "starId": 3,
              "countryid": 25,
              "longhotelId": 34018,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "19",
              "currencyId": 4
            },
            "redPriceUAH": 59108,
            "countOther": 1,
            "latitude": 27.864456176757,
            "longitude": 34.308410644531,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": false,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:13.443+03:00",
            "operatorName": "Alliance",
            "operatorIdInt": 119,
            "operatorId": "{AllianceNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-06T00:00:00+03:00",
              "hash": 235760631
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": -1458001404,
              "value": "Sharm Inn Amarein"
            },
            "hotelId": 33922,
            "hotelUrl": "/hotel/eg/sharm-inn-amarein",
            "hotelKey": "33922",
            "star": {
              "hash": 4,
              "value": "4"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "STANDARD ROOM",
            "htplace": "2 AD",
            "price": 1426,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 59821,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/33922/0?size=catalog",
            "rate": "7",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 0,
            "isEarly": false,
            "SystemKey": "74m6795380044043416425c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 64038009,
            "sort": 20,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 51,
              "htplaceId": 2003989,
              "mealId": 1,
              "starId": 4,
              "countryid": 25,
              "longhotelId": 33922,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "96",
              "currencyId": 4
            },
            "redPriceUAH": 59821,
            "countOther": 1,
            "latitude": 27.874033,
            "longitude": 34.3062346,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": false,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-13T00:00:00+03:00",
              "hash": 861265522
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": 1109519376,
              "value": "Coral Hills Resort Sharm El Sheikh"
            },
            "hotelId": 33964,
            "hotelUrl": "/hotel/eg/coral-hills-resort",
            "hotelKey": "33964",
            "star": {
              "hash": 3,
              "value": "3"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "Standard Garden View",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2205,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 61961,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/33964/0?size=catalog",
            "rate": "6,8",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2145,
            "isEarly": false,
            "SystemKey": "74p1625235873076932388c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 58361480,
            "sort": 25,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 40,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 3,
              "countryid": 25,
              "longhotelId": 33964,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "80",
              "currencyId": 4
            },
            "redPriceUAH": 60275,
            "countOther": 1,
            "latitude": 27.8652906,
            "longitude": 34.3094337,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:13.443+03:00",
            "operatorName": "Alliance",
            "operatorIdInt": 119,
            "operatorId": "{AllianceNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-06T00:00:00+03:00",
              "hash": 235760631
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": -86201230,
              "value": "Mazar Resort & Spa"
            },
            "hotelId": 74741,
            "hotelUrl": "/hotel/eg/mazar-resort-spa",
            "hotelKey": "74741",
            "star": {
              "hash": 3,
              "value": "3"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "STANDARD ROOM",
            "htplace": "2 AD",
            "price": 1442,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 60492,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/74741/0?size=catalog",
            "rate": "7,4",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 0,
            "isEarly": false,
            "SystemKey": "74p4091965139324286645c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": true,
            "FarTourId": 51082163,
            "sort": 30,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 51,
              "htplaceId": 2003989,
              "mealId": 1,
              "starId": 3,
              "countryid": 25,
              "longhotelId": 74741,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "103",
              "currencyId": 4
            },
            "redPriceUAH": 60492,
            "countOther": 1,
            "latitude": 27.9578512,
            "longitude": 34.3656984,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": false,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-11T00:00:00+03:00",
              "hash": -767878433
            },
            "region": {
              "RegionName": "Хургада",
              "ResortName": "Хургада",
              "RegionHash": 620,
              "ResortHash": 1482,
              "value": "Хургада Хургада",
              "hash": -717269954
            },
            "hotel": {
              "hash": 265620930,
              "value": "Sun & Sea Hotel"
            },
            "hotelId": 121010,
            "hotelUrl": "/hotel/eg/sun-sea-hotel",
            "hotelKey": "121010",
            "star": {
              "hash": 3,
              "value": "3"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "ROOM STANDARD",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2222,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 62439,
            "nights": 7,
            "address": "Хургада",
            "photo": "https://img4.farvater.travel/mapkey/121010/0?size=catalog",
            "rate": "9,2",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2160,
            "isEarly": false,
            "SystemKey": "74m5537753838453901574c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 58361021,
            "sort": 35,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 957618,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 3,
              "countryid": 25,
              "longhotelId": 121010,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "4",
              "currencyId": 4
            },
            "redPriceUAH": 60696,
            "countOther": 1,
            "latitude": 27.209267,
            "longitude": 33.845037,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-13T00:00:00+03:00",
              "hash": 861265522
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": -664335410,
              "value": "Falcon Naama Star"
            },
            "hotelId": 34205,
            "hotelUrl": "/hotel/eg/falcon-naama-star",
            "hotelKey": "34205",
            "star": {
              "hash": 3,
              "value": "3"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "STANDARD ROOM",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2205,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 61961,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/34205/0?size=catalog",
            "rate": "7,4",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2167,
            "isEarly": false,
            "SystemKey": "74p1636004993299643817c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 58361563,
            "sort": 40,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 51,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 3,
              "countryid": 25,
              "longhotelId": 34205,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "238",
              "currencyId": 4
            },
            "redPriceUAH": 60893,
            "countOther": 1,
            "latitude": 27.909924,
            "longitude": 34.3184768,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-13T00:00:00+03:00",
              "hash": 861265522
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": 1764569717,
              "value": "Dive Inn  Resort"
            },
            "hotelId": 34178,
            "hotelUrl": "/hotel/eg/dive-inn-resort",
            "hotelKey": "34178",
            "star": {
              "hash": 4,
              "value": "4"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "ROOM STANDARD POOL VIEW",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2253,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 63310,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/34178/0?size=catalog",
            "rate": "8,2",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2193,
            "isEarly": false,
            "SystemKey": "74p2552041400695888692c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 64039087,
            "sort": 45,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 1455597,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 4,
              "countryid": 25,
              "longhotelId": 34178,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "175",
              "currencyId": 4
            },
            "redPriceUAH": 61624,
            "countOther": 1,
            "latitude": 27.865172,
            "longitude": 34.3110859,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          },
          {
            "disablePromoCode": false,
            "HotType": 1,
            "EarlyType": 1,
            "RecommendedType": 1,
            "isHot": false,
            "isPromo": false,
            "isBestDeal": false,
            "LoadedDate": "2022-08-01T15:16:15.473+03:00",
            "operatorName": "Coral Travel",
            "operatorIdInt": 117,
            "operatorId": "{CoralNativeApi}",
            "type": "plain",
            "cityFromCode": "WAW",
            "cityFromName": "Варшава",
            "flyInclude": "true",
            "countryID": "25",
            "countryName": "Єгипет",
            "countryNameAccusativeCase": "в Єгипет",
            "checkIn": {
              "value": "2022-08-13T00:00:00+03:00",
              "hash": 861265522
            },
            "region": {
              "RegionName": "Шарм-ель-Шейх",
              "ResortName": "Шарм-ель-Шейх",
              "RegionHash": 621,
              "ResortHash": 1486,
              "value": "Шарм-ель-Шейх Шарм-ель-Шейх",
              "hash": 1608793468
            },
            "hotel": {
              "hash": -287125384,
              "value": "Sharming Inn"
            },
            "hotelId": 33821,
            "hotelUrl": "/hotel/eg/sharming-inn",
            "hotelKey": "33821",
            "star": {
              "hash": 4,
              "value": "4"
            },
            "meal": {
              "hash": 1,
              "value": "Все включено (AI)"
            },
            "room": "PROMO ROOM",
            "htplace": "2 ADL+1 CHD (0.00-1.99)",
            "price": 2229,
            "customPriceWd": 0,
            "customPriceWdUah": 0,
            "currency": "USD",
            "priceUAH": 62635,
            "nights": 7,
            "address": "Шарм-эль-Шейх",
            "photo": "https://img4.farvater.travel/mapkey/33821/0?size=catalog",
            "rate": "7,8",
            "adl": 2,
            "kids": 1,
            "ages": "1",
            "chd": 2198,
            "isEarly": false,
            "SystemKey": "74m4847810859373670502c25",
            "othersAgr": null,
            "other": null,
            "isRecommended": false,
            "IsChoiceFarvater": false,
            "FarTourId": 64039168,
            "sort": 50,
            "IsFreePCRTest": false,
            "AdditionalInfo": null,
            "idsForText": {
              "roomId": 151,
              "htplaceId": 1726554,
              "mealId": 1,
              "starId": 4,
              "countryid": 25,
              "longhotelId": 33821,
              "airportId": 28,
              "transferTypeId": 1,
              "touristsBits": 74,
              "reviewsCount": "194",
              "currencyId": 4
            },
            "redPriceUAH": 61764,
            "countOther": 1,
            "latitude": 27.8696155,
            "longitude": 34.318741,
            "next": null,
            "prev": null,
            "tourFreeCancel": false,
            "isOtp": true,
            "HealthCertificate": false,
            "WorksIn2020": false,
            "promotionEndDate": null,
            "isLastSeats": false
          }
        ],
        "filter": null,
        "hasMore": true,
        "Statistics": null,
        "stopHotelSearch": true,
        "nextSort": null
      },
      tour: {},
      otherTours: [],
      hotTours: [],
      recommendedTours: [],
      flights: {}
    }})


  test('render page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Catalog/>
        </MemoryRouter>
      </Provider>
      );
    expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
  })

  test('if more than 10 hotels should be load more btn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Catalog/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText('Показати більше')).toBeNull()
  })
})