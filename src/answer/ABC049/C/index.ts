import * as readline from "readline";

const remove = (str: string, target: string) => {
  const i = str.indexOf(target);
  if (i === 0) {
    return str.substr(target.length)
  }
  return str;
};

const main = (argss: string[][]) => {
  let S = argss[0][0];

  // dreameraseの判定が難しいため、文字列を判定させる
  const words = ['dream', 'dreamer', 'erase', 'eraser'].map(w => w.split('').reverse().join(''));
  const s = S.split('').reverse().join('');

  let can = true;
  for (let p = 0; p < s.length;) {
    let found = false;
    words.forEach((w) => {
      if (s.substr(p, w.length) === w) {
        p += w.length;
        found = true;
      }
    });
    if (!found) {
      can = false;
      break;
    }
  }

  if (can) {
    console.log('YES');
  } else {
    console.log('NO');
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
