import { call, put } from 'redux-saga/effects';
import {searchForm} from "./general";
import {Api} from "../api";
import {SEARCH_FORM_FAIL, SEARCH_FORM_REQUEST, SEARCH_FORM_SUCCESS} from "../actions/general";
import {DEFAULT_SEARCH_VALUE} from "../helpers/constants";

const searchFormMock = {
  "statusCode": 200,
  "statusMessage": "success",
  "data": {
    "current": "",
    "cityFrom": {
      "options": [
        {
          "id": 4,
          "name": "Києва",
          "code": "kbp",
          "town": "Київ"
        },
        {
          "id": 5,
          "name": "Львова",
          "code": "lwo",
          "town": "Львів"
        },
        {
          "id": 11,
          "name": "Дніпра",
          "code": "dnk",
          "town": "Дніпро"
        },
        {
          "id": 7,
          "name": "Одеси",
          "code": "ods",
          "town": "Одеса"
        },
        {
          "id": 13,
          "name": "Без перельоту",
          "code": "non",
          "town": "Без перельоту"
        },
        {
          "id": 22,
          "name": "Риги",
          "code": "rix",
          "town": "Рига"
        },
        {
          "id": 23,
          "name": "Вільнюса",
          "code": "vno",
          "town": "Вільнюс"
        },
        {
          "id": 24,
          "name": "Кишинева",
          "code": "kiv",
          "town": "Кишинів"
        },
        {
          "id": 25,
          "name": "Таллінна",
          "code": "tll",
          "town": "Таллінн"
        },
        {
          "id": 26,
          "name": "Алмати",
          "code": "ala",
          "town": "Алмати"
        },
        {
          "id": 27,
          "name": "Нур-Султана",
          "code": "nqz",
          "town": "Риги"
        },
        {
          "id": 28,
          "name": "Варшави",
          "code": "waw",
          "town": "Варшава"
        },
        {
          "id": 29,
          "name": "Любліна",
          "code": "luz",
          "town": "Люблін"
        },
        {
          "id": 30,
          "name": "Жешува",
          "code": "rze",
          "town": "Жешув"
        },
        {
          "id": 31,
          "name": "Катовіце",
          "code": "ktw",
          "town": "Катовіце"
        },
        {
          "id": 32,
          "name": "Ліона",
          "code": "lys",
          "town": "Ліон"
        },
        {
          "id": 33,
          "name": "Нанта",
          "code": "nte",
          "town": "Нант"
        },
        {
          "id": 34,
          "name": "Парижа",
          "code": "cdg",
          "town": "Париж"
        },
        {
          "id": 35,
          "name": "Праги",
          "code": "prg",
          "town": "Прага"
        },
        {
          "id": 36,
          "name": "Барселони",
          "code": "bcn",
          "town": "Барселона"
        },
        {
          "id": 37,
          "name": "Відня",
          "code": "vie",
          "town": "Відень"
        },
        {
          "id": 38,
          "name": "Софії",
          "code": "sof",
          "town": "Софія"
        },
        {
          "id": 39,
          "name": "Берліна",
          "code": "ber",
          "town": "Берлін"
        },
        {
          "id": 40,
          "name": "Дюссельдорфа",
          "code": "dus",
          "town": "Дюссельдорф"
        },
        {
          "id": 41,
          "name": "Кельна",
          "code": "cgn",
          "town": "Кельн"
        },
        {
          "id": 42,
          "name": "Мюнхена",
          "code": "muc",
          "town": "Мюнхен"
        },
        {
          "id": 43,
          "name": "Франкфурта",
          "code": "fra",
          "town": "Франкфурт"
        },
        {
          "id": 44,
          "name": "Вроцлава",
          "code": "wro",
          "town": "Вроцлав"
        },
        {
          "id": 45,
          "name": "Ґданська",
          "code": "gdn",
          "town": "Ґданськ"
        },
        {
          "id": 46,
          "name": "Познань",
          "code": "poz",
          "town": "Познань"
        },
        {
          "id": 47,
          "name": "Бухареста",
          "code": "otp",
          "town": "Бухарест"
        },
        {
          "id": 48,
          "name": "Клуж-Напока",
          "code": "clj",
          "town": "Клуж-Напока"
        },
        {
          "id": 49,
          "name": "Братислави",
          "code": "bts",
          "town": "Братислава"
        },
        {
          "id": 50,
          "name": "Стамбула",
          "code": "ist",
          "town": "Стамбул"
        },
        {
          "id": 51,
          "name": "Будапешта",
          "code": "bud",
          "town": "Будапешт"
        }
      ],
      "checkedModel": {
        "id": 5,
        "name": "Львова",
        "code": "lwo",
        "town": "Львів"
      }
    },
    "destination": {
      "options": {
        "countries": {
          "popular": [
            {
              "id": 83,
              "name": "Туреччина",
              "alpha2": "TR"
            },
            {
              "id": 25,
              "name": "Єгипет",
              "alpha2": "EG"
            },
            {
              "id": 59,
              "name": "ОАЕ",
              "alpha2": "AE"
            },
            {
              "id": 81,
              "name": "Танзанія",
              "alpha2": "TZ"
            },
            {
              "id": 23,
              "name": "Домініканська республіка",
              "alpha2": "DO"
            }
          ],
          "others": [
            {
              "id": 33,
              "name": "Греція",
              "alpha2": "GR"
            },
            {
              "id": 44,
              "name": "Італія",
              "alpha2": "IT"
            },
            {
              "id": 80,
              "name": "Таїланд",
              "alpha2": "TH"
            },
            {
              "id": 8,
              "name": "Болгарія",
              "alpha2": "BG"
            },
            {
              "id": 21,
              "name": "Кіпр",
              "alpha2": "CY"
            },
            {
              "id": 39,
              "name": "Індія",
              "alpha2": "IN"
            },
            {
              "id": 42,
              "name": "Іспанія",
              "alpha2": "ES"
            },
            {
              "id": 37,
              "name": "Хорватія",
              "alpha2": "HR"
            },
            {
              "id": 55,
              "name": "Чорногорія",
              "alpha2": "ME"
            },
            {
              "id": 5,
              "name": "Австрія",
              "alpha2": "AT"
            },
            {
              "id": 28,
              "name": "Франція",
              "alpha2": "FR"
            },
            {
              "id": 82,
              "name": "Туніс",
              "alpha2": "TN"
            },
            {
              "id": 40,
              "name": "Індонезія",
              "alpha2": "ID"
            },
            {
              "id": 51,
              "name": "Мальдіви",
              "alpha2": "MV"
            },
            {
              "id": 115,
              "name": "Албанія",
              "alpha2": "AL"
            },
            {
              "id": 74,
              "name": "Словаччина",
              "alpha2": "SK"
            },
            {
              "id": 84,
              "name": "Україна",
              "alpha2": "UA"
            },
            {
              "id": 34,
              "name": "Грузія",
              "alpha2": "GE"
            },
            {
              "id": 0,
              "name": "Андорра",
              "alpha2": "AD"
            },
            {
              "id": 20,
              "name": "Куба",
              "alpha2": "CU"
            },
            {
              "id": 63,
              "name": "Польща",
              "alpha2": "PL"
            },
            {
              "id": 54,
              "name": "Мексика",
              "alpha2": "MX"
            },
            {
              "id": 64,
              "name": "Португалія",
              "alpha2": "PT"
            },
            {
              "id": 43,
              "name": "Ізраїль",
              "alpha2": "IL"
            },
            {
              "id": 86,
              "name": "В'єтнам",
              "alpha2": "VN"
            },
            {
              "id": 27,
              "name": "Фінляндія",
              "alpha2": "FI"
            },
            {
              "id": 87,
              "name": "Угорщина",
              "alpha2": "HU"
            },
            {
              "id": 14,
              "name": "Чехія",
              "alpha2": "CZ"
            },
            {
              "id": 30,
              "name": "Німеччина",
              "alpha2": "DE"
            },
            {
              "id": 41,
              "name": "Йорданія",
              "alpha2": "JO"
            },
            {
              "id": 53,
              "name": "Маврикій",
              "alpha2": "MU"
            },
            {
              "id": 75,
              "name": "Словенія",
              "alpha2": "SI"
            },
            {
              "id": 52,
              "name": "Малайзія",
              "alpha2": "MY"
            },
            {
              "id": 68,
              "name": "Сейшели",
              "alpha2": "SC"
            },
            {
              "id": 105,
              "name": "Марокко",
              "alpha2": "MA"
            },
            {
              "id": 73,
              "name": "Сінгапур",
              "alpha2": "SG"
            },
            {
              "id": 47,
              "name": "Кенія",
              "alpha2": "KE"
            },
            {
              "id": 101,
              "name": "Литва",
              "alpha2": "LT"
            },
            {
              "id": 104,
              "name": "Естонія",
              "alpha2": "EE"
            },
            {
              "id": 118,
              "name": "Катар",
              "alpha2": "QA"
            },
            {
              "id": 11,
              "name": "Камбоджа",
              "alpha2": "KH"
            },
            {
              "id": 35,
              "name": "Нідерланди",
              "alpha2": "NL"
            },
            {
              "id": 100,
              "name": "Латвія",
              "alpha2": "LV"
            },
            {
              "id": 91,
              "name": "Лаос",
              "alpha2": "LA"
            }
          ]
        },
        "resorts": [],
        "hotels": [],
        "countryResorts": [],
        "regionResorts": null
      },
      "checkedModel": {
        "country": null,
        "resorts": [],
        "hotels": [],
        "queryString": ""
      }
    },
    "nights": {
      "options": {
        "minDays": 1,
        "maxDays": 15,
        "maxDaysRange": 5
      },
      "checkedModel": {
        "from": {
          "id": 7,
          "name": "7",
          "code": null
        },
        "till": {
          "id": 9,
          "name": "9",
          "code": null
        }
      },
      "defaultModel": {
        "from": {
          "id": 7,
          "name": "7",
          "code": null
        },
        "till": {
          "id": 9,
          "name": "9",
          "code": null
        }
      }
    },
    "tourists": {
      "options": {
        "maxAdults": 5,
        "maxKids": 4,
        "maxAge": 16
      },
      "checkedModel": {
        "adult": {
          "id": 2,
          "name": "2",
          "code": null
        },
        "kids": {
          "id": 0,
          "name": "0",
          "code": null
        },
        "ages": []
      }
    },
    "date": {
      "options": {
        "date": "2022-08-23T00:00:00+03:00",
        "checked": true,
        "checkboxDays": 3,
        "min": "2022-08-01T00:00:00+03:00",
        "max": "2023-08-01T00:00:00+03:00",
        "disabled": [
          "2022-08-22T00:00:00+03:00"
        ]
      },
      "checkedModel": {
        "date": "2022-09-05T00:00:00+03:00",
        "checked": false,
        "minus": 7,
        "plus": 0
      },
      "defaultModel": {
        "date": "2022-09-01T00:00:00+03:00",
        "checked": true,
        "minus": 3,
        "plus": 3
      },
      "disabled": []
    },
    "stars": {
      "options": [
        {
          "id": -1,
          "name": "Будь-яка категорія",
          "code": null
        },
        {
          "id": 1,
          "name": "2",
          "code": null
        },
        {
          "id": 3,
          "name": "3",
          "code": null
        },
        {
          "id": 4,
          "name": "4",
          "code": null
        },
        {
          "id": 7,
          "name": "5",
          "code": null
        },
        {
          "id": 9,
          "name": "Готель бунгального типу 4 *",
          "code": null
        },
        {
          "id": 11,
          "name": "Готель бунгального типу 5 *",
          "code": null
        },
        {
          "id": 10,
          "name": "Вілла",
          "code": null
        },
        {
          "id": 12,
          "name": "Апартаменти",
          "code": null
        }
      ],
      "checkedModel": [
        {
          "id": 3,
          "name": "3",
          "code": null
        },
        {
          "id": 4,
          "name": "4",
          "code": null
        },
        {
          "id": 7,
          "name": "5",
          "code": null
        }
      ]
    },
    "meals": {
      "options": [
        {
          "id": -1,
          "name": "Будь-яке",
          "code": null
        },
        {
          "id": 6,
          "name": "Без харчування (RO)",
          "code": "RO"
        },
        {
          "id": 0,
          "name": "Сніданок (BB)",
          "code": "BB"
        },
        {
          "id": 5,
          "name": "Сніданок + вечеря (HB)",
          "code": "HB"
        },
        {
          "id": 4,
          "name": "Сніданок + обід + вечеря (FB)",
          "code": "FB"
        },
        {
          "id": 1,
          "name": "Все включено (AI)",
          "code": "AI"
        },
        {
          "id": 2,
          "name": "Ультра все включено (UAI)",
          "code": "UAI"
        }
      ],
      "checkedModel": [
        {
          "id": 0,
          "name": "Сніданок (BB)",
          "code": "BB"
        },
        {
          "id": 1,
          "name": "Все включено (AI)",
          "code": "AI"
        },
        {
          "id": 2,
          "name": "Ультра все включено (UAI)",
          "code": "UAI"
        },
        {
          "id": 4,
          "name": "Сніданок + обід + вечеря (FB)",
          "code": "FB"
        },
        {
          "id": 5,
          "name": "Сніданок + вечеря (HB)",
          "code": "HB"
        },
        {
          "id": 6,
          "name": "Без харчування (RO)",
          "code": "RO"
        }
      ]
    }
  },
  "statistics": null
}

describe('testing general saga', () => {
  const action = {payload: DEFAULT_SEARCH_VALUE};
  it('success triggers success action with searchForm', () => {

    const generator = searchForm(action);
    const res = searchFormMock;

    expect(generator.next().value).toEqual(call(Api.general.searchForm, action.payload));
    expect(generator.next(res).value).toEqual(put({type: SEARCH_FORM_SUCCESS, payload: res.data.data}));
    expect(generator.next().done).toEqual(true);
  });

  it('failure triggers failure action', () => {
    const generator = searchForm(action);
    const res = {};

    expect(generator.next().value).toEqual(call(Api.general.searchForm, action.payload));
    expect(generator.next(res).value).toEqual(put({type: SEARCH_FORM_FAIL}));
    // expect(generator.next())
    //   .toEqual({ done: true, value: undefined });
  });
});

// describe('searchCharacters', () => {
//   it('success triggers success action with characters', () => {
//     const term = 'Luke';
//     const generator = searchCharactersSaga(searchCharactersActionCreator(term));
//     const response = { data: { results: GetCharactersMock } };
//
//     expect(generator.next().value)
//       .toEqual(call(searchCharactersFromApi, term));
//
//     expect(generator.next(response).value)
//       .toEqual(put(getCharactersSuccessActionCreator(GetCharactersMock)));
//
//     expect(generator.next())
//       .toEqual({ done: true, value: undefined });
//   });
//
//   it('failure triggers failure action', () => {
//     const term = 'Luke';
//     const generator = searchCharactersSaga(searchCharactersActionCreator(term));
//     const response = {};
//
//     expect(generator.next().value)
//       .toEqual(call(searchCharactersFromApi, term));
//
//     expect(generator.next(response).value)
//       .toEqual(put(getCharactersFailureActionCreator()));
//
//     expect(generator.next())
//       .toEqual({ done: true, value: undefined });
//   });
// });