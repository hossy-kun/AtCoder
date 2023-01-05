import * as readline from 'readline';

const main = (argss: string[][]): string => {
  // <in>
  // N
  // A B
  const N = +argss[0][0];
  const [A, B] = argss[1].map(Number);
  return answer(N * (A + B));
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
  const a = main(__lines.map(s => s.split(' ')));
  console.log(a);
});

const answer = (v: number | string | bigint): string => {
  if (v !== null && v !== undefined) {
    return v.toString();
  } else {
    return v;
  }
};
