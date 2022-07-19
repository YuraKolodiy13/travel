import {getTimeDuration} from "./global";

describe('testing global helpers', () => {

  test('testing getTimeDuration func', () => {
    expect(getTimeDuration(8, 4, 55, 0)).toBe('4:55');
    expect(getTimeDuration(3, 2, 10, 5)).toBe('1:05');
    expect(getTimeDuration(2, 22, 20, 0)).toBe('4:20');
  })

})