
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
  lowerBound,
  upperBound,
};
