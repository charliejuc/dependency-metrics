import { subtract, sum } from "../utils/math";
import { doSomething } from "./doSomething";

export const doSomethingMore = (a: number, b: number): number => {
  return doSomething(a, b) + sum(a, b) + subtract(a, b);
};
