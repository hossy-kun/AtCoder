import * as readline from "readline";

const count = (S: string[], K: number, base: number): number => {
  let ope = 0;
  for (let n = base; n < S.length; n++) {
    if (S[n] === 'X') {
      continue;
    }
    S[n] = 'X';
    ope++;
    if (K === ope) {
      break;
    }
  }

  let start = S.lastIndexOf('.', base) + 1;
  let end = S.indexOf('.', start);
  if (end === -1) {
    end = S.length;
  }
  return end - start;
};

const main = (argss: string[][]) => {
  const S = argss[0][0];
  const SS = S.split('');
  const K = +argss[1][0];

  let pos = 0;
  let max = count(SS.slice(), K, pos);
  while (true) {
    pos = S.indexOf('.', pos);
    if (pos === -1) {
      break;
    }
    const cnt = count(SS.slice(), K, pos);
    if (max < cnt) {
      max = cnt;
    }
    pos++;
  }

  console.log(max);
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
