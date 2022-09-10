
const binarySearch = <T>(list: T[], target: T, comparator: (a: T, b: T) => number) => {
  let idx = -1;
  let l = 0;
  let r = list.length - 1;
  while (0 <= r - l) {
    const mid = Math.floor((l + r) / 2);
    const comp = comparator(list[mid], target);
    if (comp === 0) {
      idx = mid;
      break;
    } else if (comp < 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return [idx, l, r]
};

/**
 * 指定された要素以上の値が現れる最初の位置を取得する
 * @param list 昇順ソートされたリスト
 * @param value 値
 * @returns 境界インデックス
 */
const lowerBound = <T>(list: T[], value: T): number => {
  let r = list.length;
  let l = -1;
  while (1 < r - l) {
    const mid = l + Math.floor((r - l) / 2);
    if (list[mid] >= value) {
      r = mid;
    } else {
      l = mid;
    }
  }
  return r;
};

/**
 * 指定された要素より大きい値が現れる最初の位置を取得する
 * @param list 昇順ソートされたリスト
 * @param value 値
 * @returns 境界インデックス
 */
const upperBound = <T>(list: T[], value: T): number => {
  let r = list.length;
  let l = -1;
  while (1 < r - l) {
    const mid = l + Math.floor((r - l) / 2);
    if (list[mid] > value) {
      r = mid;
    } else {
      l = mid;
    }
  }
  return r;
};

export {
  binarySearch,
  lowerBound,
  upperBound,
};
