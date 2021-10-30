import { generateArray, generate2DArray } from "./array";

describe('array', () => {
  it('generateArray', () => {
    expect(generateArray(0)).toEqual([]);
    expect(generateArray(10)).toEqual([0,0,0,0,0,0,0,0,0,0]);
  });
  it('generate2DArray', () => {
    expect(generate2DArray(0, 0)).toEqual([]);
    expect(generate2DArray(10, 10)).toEqual([
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]);
  });
});
