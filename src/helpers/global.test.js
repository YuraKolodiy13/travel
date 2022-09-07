import {commify, getFullDate, getNightsValue, getTimeDuration, getTouristsValue} from "./global";

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

  test('testing getNightsValue func', () => {
    expect(getNightsValue(1, 1)).toBe('1 ніч');
    expect(getNightsValue(4, 8)).toBe('4-8 ночей');
    expect(getNightsValue(3, 4)).toBe('3-4 ночі');
    expect(getNightsValue(3, 4)).not.toBe('3-4 ночей');
    expect(getNightsValue(9, 9)).not.toBe('9-9 ночей');
  })

  test('testing getTouristsValue func', () => {
    expect(getTouristsValue(2, 1)).toBe('3 туриста');
    expect(getTouristsValue(1, 0)).toBe('1 турист');
    expect(getTouristsValue(5, 2)).toBe('7 туристів');
    expect(getTouristsValue(2, 2)).not.toBe('4 туристів');
  })

})