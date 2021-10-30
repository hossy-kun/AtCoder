
const generateArray = (n: number): number[] => {
  return new Array<number>(n).fill(0);
}
const generate2DArray = (n: number, m: number): number[][] => {
  return Array.from(new Array<number>(n), _ => new Array<number>(m).fill(0));
}

export { generateArray, generate2DArray };
