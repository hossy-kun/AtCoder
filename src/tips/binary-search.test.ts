import { lowerBound, upperBound } from "./binary-search";

describe('binary-search', () => {
  it('lowerBound', () => {
    const data = [1, 4, 4, 7, 7, 8, 8, 11, 13, 19];
    expect(lowerBound(data, 0)).toEqual(0);
    expect(lowerBound(data, 1)).toEqual(0);
    expect(lowerBound(data, 4)).toEqual(1);
    expect(lowerBound(data, 6)).toEqual(3);
    expect(lowerBound(data, 7)).toEqual(3);
    expect(lowerBound(data, 19)).toEqual(9);
    expect(lowerBound(data, 20)).toEqual(10);
  });

  it('upperBound', () => {
    const data = [1, 4, 4, 7, 7, 8, 8, 11, 13, 19];
    expect(upperBound(data, 0)).toEqual(0);
    expect(upperBound(data, 1)).toEqual(1);
    expect(upperBound(data, 4)).toEqual(3);
    expect(upperBound(data, 6)).toEqual(3);
    expect(upperBound(data, 7)).toEqual(5);
    expect(upperBound(data, 19)).toEqual(10);
    expect(upperBound(data, 20)).toEqual(10);
  });
});
