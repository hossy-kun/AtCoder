
/**
 * 2分探索
 * @param list 昇順ソートされたリスト
 * @param cond 条件
 * @returns 境界値
 */
const binarySearch = <T>(list: T[], cond: (val: T) => boolean) => {
  let ok = list.length;
  let ng = -1;
  while (ok - ng > 1) {
    const mid = Math.floor((ok + ng) / 2);
    if (cond(list[mid])) {
      ok = mid;
    } else {
      ng = mid;
    }
  }
  return ok;
};

export {
  binarySearch,
};
