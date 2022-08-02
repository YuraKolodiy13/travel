import {commify, getFullDate, getTimeDuration} from "./global";

describe('testing global helpers', () => {

  test('testing getTimeDuration func', () => {
    expect(getTimeDuration(8, 4, 55, 0)).toBe('4:55');
    expect(getTimeDuration(3, 2, 10, 5)).toBe('1:05');
    expect(getTimeDuration(2, 22, 20, 0)).toBe('4:20');
  })

  test('testing getFullDate func', () => {
    expect(getFullDate(new Date('2017-01-26'))).toBe('26.01.2017');
    expect(getFullDate(new Date(0))).toBe('01.01.1970');
  })

  test('testing commify func', () => {
    expect(commify(1000)).toBe('1,000');
    expect(commify(2520)).toBe('2,520');
    expect(commify(53023243)).toBe('53,023,243');
    expect(commify(54353)).not.toBe('54353');
  })

})