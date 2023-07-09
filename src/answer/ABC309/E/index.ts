import * as readline from 'readline';

interface Node {
  children: Set<number>;
}

const main = (argss: string[][]): string => {
  const [N, M] = argss[0].map(Number);
  const p = argss[1].map(Number);

  const nodeList: Node[] = [];
  for (let n = 0; n < N; n++) {
    nodeList.push({ children: new Set() });
  }

  for (let n = 1; n < N; n++) {
    nodeList[p[n-1]-1].children.add(n);
  }

  const insurList = new Map<number, number>();
  for (let m = 0; m < M; m++) {
    const [x, y] = argss[2+m].map(Number);

    if (!insurList.has(x)) {
      insurList.set(x, y);
    } else {
      const i = insurList.get(x)!;
      if (i < y) {
        insurList.set(x, y);
      }
    }
  }

  let count = 0;
  const queue = [[0, -1]];
  let index = 0;
  while (index < queue.length) {
    let [i, g] = queue[index];
    const node = nodeList[i];
    const ins = insurList.get(i+1);
    if (ins !== undefined) {
      g = Math.max(g, ins);
    }
    if (0 <= g) {
      count++;
    }
    node.children.forEach((v) => {
      queue.push([v, g - 1]);
    });
    index++;
  }

  return answer(count);
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
