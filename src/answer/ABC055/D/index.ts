import * as readline from "readline";

const getAnimal = (l: string, la: string, ll: string) => {
  let ani = '';
  if (l === 'S') {
    if (la === 'o') {
      ani = ll;
    } else {
      ani = ll === 'W' ? 'S' : 'W';
    }
  } else {
    if (la === 'o') {
      ani = ll === 'W' ? 'S' : 'W';
    } else {
      ani = ll;
    }
  }
  return ani;
};

const place = (N: number, s: string, temp: string): string => {
  const ary = temp.split('');
  for (let n = 2; n < N; n++) {
    const ani = getAnimal(ary[n-1], s.charAt(n-1), ary[n-2]);
    ary.push(ani);
  }
  return ary.join('');
};

const check = (N: number, s: string, temp: string): boolean => {
  const ani0 = getAnimal(temp.charAt(N-1), s.charAt(N-1), temp.charAt(N-2));
  const ani1 = getAnimal(temp.charAt(0), s.charAt(0), temp.charAt(N-1));
  return ani0 === temp.charAt(0) && ani1 === temp.charAt(1);
};

const main = (argss: string[][]) => {
  const N = +argss[0][0];
  const s = argss[1][0];

  let animals = '';

  const pattern = ['SS','WS','SW','WW'];
  for (let temp of pattern) {
    const a = place(N, s, temp);
    if (check(N, s, a)) {
      animals = a;
      break;
    }
  };

  if (0 < animals.length) {
    console.log(animals);
  } else {
    console.log(-1);
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
