import * as readline from "readline";

const canMove = (dt: number, dx: number, dy: number): boolean => {
  if (dt < dx + dy) {
    return false;
  }

  if ((dt - (dx + dy)) % 2 !== 0) {
    return false;
  }

  return true;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];

  let canPlan = true;
  let [pt, px, py] = [0, 0, 0];
  for (let n = 1; n <= N; n++) {
    const [t, x, y] = argss[n].map(v => +v);
    if (!canMove(t - pt, Math.abs(x - px), Math.abs(y - py))) {
      canPlan = false;
      break;
    }
    pt = t; px = x; py = y;
  }

  if (canPlan) {
    console.log('Yes');
  } else {
    console.log('No');
  }
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
