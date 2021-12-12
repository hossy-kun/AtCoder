import { UnionFind } from "./union-find";

describe('union-find', () => {
  it('UnionFind', () => {
    const uf = new UnionFind(10);
    uf.unite(0, 1);
    uf.unite(2, 3);
    uf.unite(3, 4);
    uf.unite(9, 7);
    uf.unite(9, 8);

    expect(uf.find(0)).toEqual(0);
    expect(uf.find(1)).toEqual(0);
    expect(uf.find(2)).toEqual(2);
    expect(uf.find(3)).toEqual(2);
    expect(uf.find(4)).toEqual(2);
    expect(uf.find(5)).toEqual(5);
    expect(uf.find(6)).toEqual(6);
    expect(uf.find(7)).toEqual(7);
    expect(uf.find(8)).toEqual(7);
    expect(uf.find(9)).toEqual(7);

    expect(uf.isSame(0, 1)).toEqual(true);
    expect(uf.isSame(2, 4)).toEqual(true);
    expect(uf.isSame(7, 8)).toEqual(true);

    expect(uf.isSame(0, 2)).toEqual(false);
    expect(uf.isSame(3, 5)).toEqual(false);
    expect(uf.isSame(5, 6)).toEqual(false);

    expect(uf.unionSize(0)).toEqual(2);
    expect(uf.unionSize(1)).toEqual(2);
    expect(uf.unionSize(2)).toEqual(3);
    expect(uf.unionSize(3)).toEqual(3);
    expect(uf.unionSize(4)).toEqual(3);
    expect(uf.unionSize(5)).toEqual(1);
    expect(uf.unionSize(6)).toEqual(1);
    expect(uf.unionSize(7)).toEqual(3);
    expect(uf.unionSize(8)).toEqual(3);
    expect(uf.unionSize(9)).toEqual(3);
  });
});
