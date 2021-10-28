import * as readline from "readline";

const main = (argss: string[][]) => {
  const N = +argss[0][0];

  // すべて燃えるまでの時間
  let t = 0;
  for (let n = 0; n < N; n++) {
    const A = +argss[n+1][0];
    const B = +argss[n+1][1];
    t += A / B;
  }

  // その半分が中間位置
  t = t / 2;

  // 中間位置を計算
  let h = 0;
  for (let n = 0; n < N; n++) {
    const A = +argss[n+1][0];
    const B = +argss[n+1][1];
    // 導火線を燃え尽きる余裕がある場合
    if (0 < t - A / B) {
      h += A
      t = t - A / B;
    // 余裕がない場合＝中間位置になる導火線
    } else {
      h += B * t;
      break;
    }
  }
  console.log(h);
};

// ----------------------------------------------------------------------------
// Template

const __lines: string[] = [];
const __reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

__reader.on('line', (line) => {
  __lines.push(line);
});
__reader.on('close', () => {
  main(__lines.map(s => s.split(' ')));
});
