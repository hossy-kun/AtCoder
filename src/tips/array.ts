
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

export {
  generateArray, narray, sarray,
  generate2DArray, narray2, sarray2,
  intersection,
};
