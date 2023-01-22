
// Generators

const generateArray = <T>(n: number, v: T): T[] => {
  return new Array<T>(n).fill(v);
};
const narray = (n: number) => {
  return generateArray<number>(n, 0);
};
const sarray = (n: number) => {
  return generateArray<string>(n, '');
};
const generate2DArray = <T>(n: number, m: number, v: T): T[][] => {
  return Array.from(new Array<T>(n), _ => new Array<T>(m).fill(v));
};
const narray2 = (n: number, m: number) => {
  return generate2DArray<number>(n, m, 0);
};
const sarray2 = (n: number, m: number) => {
  return generate2DArray<string>(n, m, '');
};

const sequentialNumbers = (size: number, start = 0): number[] => {
  return [...Array(size)].map((_, i) => i + start);
};

// Utilities

const intersection = (arr1: any[], arr2: any[]): any[] => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const result: any[] = [];
  setA.forEach((v) => {
    if (setB.has(v)) {
      result.push(v);
    }
  });
  return result;
}

/** 次の順列を返す */
const nextPermutation = (arr: number[]): boolean => {
  const len = arr.length;
  for (let i = len - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      for (let j = len - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          const l = (len - (i + 1)) >> 1;
          for (let k = 0; k < l; k++) {
            [arr[i + 1 + k], arr[len - 1 - k]] = [arr[len - 1 - k], arr[i + 1 + k]];
          }
          return true;
        }
      }
    }
  }
  return false;
}

export {
  generateArray, narray, sarray,
  generate2DArray, narray2, sarray2,
  sequentialNumbers,
  intersection,
  nextPermutation,
};
