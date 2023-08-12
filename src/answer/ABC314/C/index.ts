import * as readline from 'readline';

type CC = {
  char: string;
  n: number;
}

const main = (argss: string[][]) => {
  const [N, M] = argss[0].map(Number);
  const S = argss[1][0];
  const C = argss[2].map(Number);

  const list: CC[][] = new Array(M);
  for (let m = 0; m < M; m++) {
    list[m] = [];
  }
  for (let n = 0; n < N; n++) {
    const char = S[n];
    const color = C[n] - 1;
    list[color].push({
      char, n
    });
  }

  const results = [];
  for (let m = 0; m < M; m++) {
    let bef = list[m][0].n;
    for (let mm = list[m].length - 1; 0 <= mm; mm--) {
      const temp = list[m][mm].n;
      list[m][mm].n = bef;
      bef = temp;
    }
    results.push(...list[m]);
  }
  results.sort((a, b) => a.n - b.n);
  console.log(results.map((v) => v.char).join(''));
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
