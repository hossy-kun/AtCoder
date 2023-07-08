import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

const main = (argss: string[][]): string => {
  const N = +argss[0][0];
  const map = generate2DArray(N, N, '');
  const map2 = generate2DArray(N, N, '');
  const ary: number[] = [];

  for (let i = 0; i < N; i++) {
    const line = argss[i+1][0].split('');
    for (let j = 0; j < N; j++) {
      map[i][j] = line[j];
      map2[i][j] = line[j];
    }
  }

  for (let j = 1; j < N; j++) {
    map[0][j] = map2[0][j-1]
  }
  for (let j = 1; j < N; j++) {
    map[j][N-1] = map2[j-1][N-1]
  }
  for (let j = 1; j < N; j++) {
    map[N-1][N-1-j] = map2[N-1][N-1-j+1]
  }
  for (let j = 1; j < N; j++) {
    map[N-1-j][0] = map2[N-1-j+1][0]
  }

  return answerll(map, ['', '\n']);
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
const answerl = (v: (number | string | bigint)[], separator = '\n'): string => {
  if (v !== null && v !== undefined) {
    return v.join(separator);
  } else {
    return v;
  }
};
const answerll = (v: (number | string | bigint)[][], separators: string[] = [' ', '\n']): string => {
  if (v !== null && v !== undefined) {
    return v.map(l => l.join(separators[0])).join(separators[1]);
  } else {
    return v;
  }
};
