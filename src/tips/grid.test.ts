import { generateGrid, countRound4, countRound8 } from "./grid";

describe('grid', () => {
  it('generateGrid', () => {
    const argss = [
      ['3', '5'],
      ['.#.#.'],
      ['###..'],
      ['..###'],
    ];
    const expected = [
      ['.','#','.','#','.'],
      ['#','#','#','.','.'],
      ['.','.','#','#','#'],
    ];
    expect(generateGrid(argss)).toEqual(expected);
  });
  it('countRound4', () => {
    const g = [
      ['.','#','#','#','.'],
      ['#','#','.','#','.'],
      ['.','.','#','.','#'],
    ];
    const expected = [
      [2,2,2,2,1],
      [1,2,4,1,2],
      [1,2,0,3,0],
    ];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 5; x++) {
        expect(countRound4(g, y, x, '#')).toEqual(expected[y][x]);
      }
    }
  });
  it('countRound8', () => {
    const g = [
      ['.','#','#','#','.'],
      ['#','#','.','.','.'],
      ['.','.','#','.','#'],
    ];
    const expected = [
      [3,3,3,1,1],
      [2,4,5,4,2],
      [2,3,1,2,0],
    ];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 5; x++) {
        expect(countRound8(g, y, x, '#')).toEqual(expected[y][x]);
      }
    }
  });
});
