import { doSomething } from "./lib/doSomething";
import { subtract, sum } from "./utils/math";

export const operation = (a: number, b: number): number => {
  return doSomething(a, b) + sum(a, b) + subtract(a, b);
};
