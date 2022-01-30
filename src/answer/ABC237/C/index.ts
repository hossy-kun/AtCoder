import * as readline from "readline";

const check = (text: string) => {
  const N = text.length;
  const N2 = Math.floor(N / 2);
  for (let n = 0; n < N2; n++) {
    const m = N - n - 1;
    if (text[n] !== text[m]) {
      return false;
    }
  }
  return true;
};

const countLastSmallA = (text: string) => {
  const N = text.length;
  let count = 0;
  for (let n = N - 1; 0 <= n; n--) {
    if (text[n] === 'a') {
      count++;
    } else {
      break;
    }
  }
  return count;
}

const countFirstSmallA = (text: string) => {
  const N = text.length;
  let count = 0;
  for (let n = 0; n < N; n++) {
    if (text[n] === 'a') {
      count++;
    } else {
      break;
    }
  }
  return count;
}


const main = (argss: string[][]) => {
  const S = argss[0][0];
  const f = countFirstSmallA(S);
  const l = countLastSmallA(S);

  let text = S;
  if (f < l) {
    text = Array(l - f).fill('a').join('').concat(S);
  }

  if (check(text)) {
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
