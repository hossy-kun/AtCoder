
/**
 * Gridを生成する
 *
 * ```
 * 3 5
 * .....
 * .....
 * .....
 * ```
 * @param argss
 * @returns
 */
const generateGrid = (argss: string[][]): string[][] => {
  // 1行目はグリッド情報行
  const H = +argss[0][0];
  const W = +argss[0][1];
  const skip = 1;

  const g: string[][] = [];
  for (let h = 0; h < H; h++) {
    g.push([]);
    g[h] = argss[h+skip][0].split('').slice(0, W);
  }
  return g;
};

/**
 * グリッドの特定位置の4方向の文字をカウントする
 *
 * .#.    102
 * ..# -> 120
 * #..    011
 *
 * @param g グリッド
 * @param cy 位置y
 * @param cx 位置x
 * @param c カウント文字
 * @returns 文字数
 */
const countRound4 = (g: string[][], cy: number, cx: number, c: string) => {
  const DIR4 = [
    { y: -1, x:  0 }, // UP
    { y:  0, x: -1 }, // LEFT
    { y:  0, x:  1 }, // RIGHT
    { y:  1, x:  0 }, // DOWN
  ];
  let count = 0;
  DIR4.forEach((p) => {
    const py = cy + p.y;
    const px = cx + p.x;

    // 範囲内チェック
    const Y = g.length;
    const X = g[0].length;
    if (py < 0 || Y <= py || px < 0 || X <= px) {
      return;
    }
    // カウント
    if (g[py][px] === c) {
      count++;
    }
  });

  return count;
};

/**
 * グリッドの特定位置の8方向の文字をカウントする
 *
 * .#.    112
 * ..# -> 231
 * #..    021
 *
 * @param g グリッド
 * @param cy 位置y
 * @param cx 位置x
 * @param c カウント文字
 * @returns 文字数
 */
 const countRound8 = (g: string[][], cy: number, cx: number, c: string) => {
  const DIR8 = [
    { y: -1, x: -1 }, // UP_LEFT
    { y: -1, x:  0 }, // UP
    { y: -1, x:  1 }, // UP_RIGHT
    { y:  0, x: -1 }, // LEFT
    { y:  0, x:  1 }, // RIGHT
    { y:  1, x: -1 }, // DOWN_LEFT
    { y:  1, x:  0 }, // DOWN
    { y:  1, x:  1 }, // DOWN_RIGHT
  ];
  let count = 0;
  DIR8.forEach((p) => {
    const py = cy + p.y;
    const px = cx + p.x;

    // 範囲内チェック
    const Y = g.length;
    const X = g[0].length;
    if (py < 0 || Y <= py || px < 0 || X <= px) {
      return;
    }
    // カウント
    if (g[py][px] === c) {
      count++;
    }
  });

  return count;
};

export { generateGrid, countRound4, countRound8 };
