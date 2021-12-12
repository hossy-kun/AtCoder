import { binarySearch } from "./binary-search";

describe('binary-search', () => {
  it('binarySearch', () => {
    const data = [1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(data, (v: number) => 5 < v)).toEqual(5);

    const data2 = ['a','bb','ccc','dddd','eeeee'];
    expect(binarySearch(data2, (v: string) => 3 <= v.length)).toEqual(2);
  });
});
