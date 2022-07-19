import {fetchEmployeesList, searchForm} from "./general";

describe('testing general sagas', () => {
  test('testing searchForm', () => {
    const searchFormSaga = searchForm();
    // console.log(searchFormSaga, 'searchFormSaga')
    const putEffect = searchFormSaga.next();
    // console.log(putEffect, 'putEffect')
    // const callEffect = putEffect.next();
    // console.log(callEffect.value, 'callEffect.value')
    // expect(callEffect.value).toEqual({mockedEmployeeResponse});
  })

})