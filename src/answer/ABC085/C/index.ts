import * as readline from "readline";

const calc = (x: number, y: number, z: number) => {
  return 10000 * x + 5000 * y + 1000 * z;
}

const check = (x: number, y: number, z: number, N: number, Y: number): boolean => {
  if (x + y + z !== N) {
    return false;
  }
  if (calc(x, y, z) !== Y) {
    return false;
  }

  return true;
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const Y = +argss[0][1];

  for (let x = 0; x <= N; x++) {
    for (let y = 0; y <= N; y++) {
      if (N < x + y) {
        break;
      }
      const z = N - (x + y);
      if (check(x, y, z, N, Y)) {
        console.log(x, y, z);
        return;
      }
    }
  }
  console.log(-1, -1, -1);
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
