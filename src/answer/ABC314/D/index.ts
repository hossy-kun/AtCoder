import * as readline from 'readline';

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  let S = argss[1][0].split('');
  const Q = +argss[2][0];

  let last = -1;
  let cast = 0;
  for (let q = 0; q < Q; q++) {
    const t = +argss[3+q][0];

    if (t === 2) {
      last = q;
      cast = 2;
    } else if (t === 3) {
      last = q;
      cast = 3;
    }
  }
  for (let q = 0; q < Q; q++) {
    const t = +argss[3+q][0];
    const x = +argss[3+q][1];
    const c = argss[3+q][2];

    if (t === 1) {
      S[x-1] = c;
    }
    if (q === last) {
      if (cast === 2) {
        S = S.map((v) => v.toLowerCase());
      } else if (cast === 3) {
        S = S.map((v) => v.toUpperCase());
      }
    }
  }

  console.log(S.join(''));
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
