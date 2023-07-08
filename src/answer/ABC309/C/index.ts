import * as readline from 'readline';

const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};

interface Drag {
  day: number;
  n: number;
}

const main = (argss: string[][]): string => {
  const [N, K] = argss[0].map(Number);
  const drag: Drag[] = [];

  let drink = 0;
  for (let n = 0; n < N; n++) {
    const [A, B] = argss[1+n].map(Number);
    drag.push({ day: A, n: B });
    drink += B;
  }

  drag.sort((a, b) => a.day - b.day);

  if (drink <= K) {
    return answer(1);
  }

  let day = 1;
  for (let n = 0; n < N; n++) {
    drink -= drag[n].n;

    if (drink <= K) {
      day = drag[n].day;
      break;
    }
  }
  return answer(day + 1);
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
