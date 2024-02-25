import { subtract, sum } from "../utils/math";

export const doSomething = (a: number, b: number): number => {
  return (sum(a, b) + subtract(b, a)) * 2;
};
