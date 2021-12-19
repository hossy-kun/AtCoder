import {
  generateArray,
  generate2DArray,
  narray, sarray,
  narray2, sarray2,
  intersection,
  nextPermutation
} from "./array";

describe('array generators', () => {
  it('generateArray', () => {
    expect(generateArray(0, 0)).toEqual([]);
    expect(generateArray(10, 0)).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(generateArray(10, 9)).toEqual([9,9,9,9,9,9,9,9,9,9]);
    expect(generateArray(10, '')).toEqual(['','','','','','','','','','']);
    expect(generateArray(10, 'a')).toEqual(['a','a','a','a','a','a','a','a','a','a']);
  });
  it('narray', () => {
    expect(narray(0)).toEqual([]);
    expect(narray(10)).toEqual([0,0,0,0,0,0,0,0,0,0]);
  });
  it('sarray', () => {
    expect(sarray(0)).toEqual([]);
    expect(sarray(10)).toEqual(['','','','','','','','','','']);
  });
  it('generate2DArray', () => {
    expect(generate2DArray(0, 0, 0)).toEqual([]);
    expect(generate2DArray(5, 10, 0)).toEqual([
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]);
    expect(generate2DArray(10, 5, 9)).toEqual([
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
      [9,9,9,9,9],
    ]);
    expect(generate2DArray(5, 10, '')).toEqual([
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
    ]);
    expect(generate2DArray(10, 5, 'a')).toEqual([
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
      ['a','a','a','a','a'],
    ]);
  });
  it('narray2', () => {
    expect(narray2(0, 0)).toEqual([]);
    expect(narray2(5, 10)).toEqual([
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]);
  });
  it('sarray2', () => {
    expect(sarray2(0, 0)).toEqual([]);
    expect(sarray2(5, 10)).toEqual([
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
    ]);
  });
});

describe('array utilities', () => {
  it('intersection', () => {
    expect(intersection([], [])).toEqual([]);

    expect(intersection([1,2,3], [2,3,4,5])).toEqual([2,3]);
    expect(intersection([1,2,3], [4,5])).toEqual([]);
    expect(intersection([1,2,3], [1,2,3,4,5])).toEqual([1,2,3]);
    expect(intersection([1,2,3], [])).toEqual([]);

    expect(intersection(['a','b','c'], ['b','c','d','e'])).toEqual(['b', 'c']);
    expect(intersection(['a','b','c'], ['d','e'])).toEqual([]);
    expect(intersection(['a','b','c'], ['a','b','c','d','e'])).toEqual(['a','b','c']);
    expect(intersection(['a','b','c'], [])).toEqual([]);
  });

  it('nextPermutation', () => {
    const ary = [1,2,3];
    expect(nextPermutation(ary)).toEqual(true);
    expect(ary).toEqual([1,3,2]);
    expect(nextPermutation(ary)).toEqual(true);
    expect(ary).toEqual([2,1,3]);
    expect(nextPermutation(ary)).toEqual(true);
    expect(ary).toEqual([2,3,1]);
    expect(nextPermutation(ary)).toEqual(true);
    expect(ary).toEqual([3,1,2]);
    expect(nextPermutation(ary)).toEqual(true);
    expect(ary).toEqual([3,2,1]);
    expect(nextPermutation(ary)).toEqual(false);
    expect(ary).toEqual([3,2,1]);
  });
});
