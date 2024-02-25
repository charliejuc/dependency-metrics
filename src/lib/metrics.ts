import { dependencyCruiser, toMapModule } from "../cruiser/dependencyCruiser";
import { mapDependentsLength } from "../cruiser/mappers";
import { Metrics } from "../types";
import { getPercentileIndex, keysExclude } from "../utils";

const metricsFactory = <R>(
  modules: { source: string; dependents: any[]; dependencies: any[] }[],
  mappers: ((modules: any) => any)[]
): R[] => {
  return modules
    .map((module): any => mappers.reduce((acc, mapper) => mapper(acc), module))
    .sort(
      (a: Metrics, b: Metrics) => b.dependentsLength - a.dependentsLength
    ) as R[];
};

export const metricsCalculator = async (
  paths: string[]
): Promise<Metrics[]> => {
  const { modules } = await dependencyCruiser(paths);

  return metricsFactory<Metrics>(modules, [
    toMapModule,
    mapDependentsLength,
    keysExclude(["module"]),
  ]);
};

export const metricsCalculatorByPercentile = async (
  paths: string[],
  percentile: number = 0.9
): Promise<Metrics[]> => {
  const result = await metricsCalculator(paths);
  const index = result.length - 1 - getPercentileIndex(result, percentile);

  return result.slice(0, index);
};
