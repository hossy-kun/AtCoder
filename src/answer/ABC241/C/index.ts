import * as readline from "readline";

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const map = generate2DArray(N, N, 0);

  for (let y = 0; y < N; y++) {
    const S = argss[y+1][0];
    for (let x = 0; x < N; x++) {
      map[y][x] = S.charAt(x) === '#' ? 1 : 0;
    }
  }

  // right
  for (let y = 0; y < N; y++) {
    for (let x = 0; x <= N - 6; x++) {
      let count = 0;
      for (let d = 0; d < 6; d++) {
        count += map[y][x + d];
      }
      if (4 <= count) {
        return answer('Yes');
      }
    }
  }

  // down
  for (let x = 0; x < N; x++) {
    for (let y = 0; y <= N - 6; y++) {
      let count = 0;
      for (let d = 0; d < 6; d++) {
        count += map[y + d][x];
      }
      if (4 <= count) {
        return answer('Yes');
      }
    }
  }

  // right-down
  for (let y = 0; y <= N - 6; y++) {
    for (let x = 0; x <= N - 6; x++) {
      let count = 0;
      for (let d = 0; d < 6; d++) {
        count += map[y + d][x + d];
      }
      if (4 <= count) {
        return answer('Yes');
      }
    }
  }

  // right-up
  for (let y = N - 1; 5 <= y; y--) {
    for (let x = 0; x <= N - 6; x++) {
      let count = 0;
      for (let d = 0; d < 6; d++) {
        count += map[y - d][x + d];
      }
      if (4 <= count) {
        return answer('Yes');
      }
    }
  }

  return answer('No');
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

const answer = (v: number | string | bigint) => {
  if (v !== null && v !== undefined) {
    console.log(v.toString());
  } else {
    console.log(v);
  }
};
