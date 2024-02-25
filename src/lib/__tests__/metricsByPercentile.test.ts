import { metricsCalculatorByPercentile } from "../metrics";

describe("metricsByPercentile dir1", () => {
  const paths = [`${__dirname}/trees/dir1`];

  it("default percentile", async () => {
    const result = await metricsCalculatorByPercentile(paths);

    expect(result).toEqual([
      {
        dependentsLength: 3,
        source: "src/lib/__tests__/trees/dir1/utils/math.ts",
      },
    ]);
  });

  it("0.7 percentile", async () => {
    const result = await metricsCalculatorByPercentile(paths, 0.7);

    expect(result).toEqual([
      {
        dependentsLength: 3,
        source: "src/lib/__tests__/trees/dir1/utils/math.ts",
      },
      {
        dependentsLength: 2,
        source: "src/lib/__tests__/trees/dir1/lib/doSomething.ts",
      },
    ]);
  });

  it("0.3 percentile", async () => {
    const result = await metricsCalculatorByPercentile(paths, 0.3);

    expect(result).toEqual([
      {
        dependentsLength: 3,
        source: "src/lib/__tests__/trees/dir1/utils/math.ts",
      },
      {
        dependentsLength: 2,
        source: "src/lib/__tests__/trees/dir1/lib/doSomething.ts",
      },
      {
        dependentsLength: 1,
        source: "src/lib/__tests__/trees/dir1/utils/subtract.ts",
      },
      {
        dependentsLength: 1,
        source: "src/lib/__tests__/trees/dir1/utils/sum.ts",
      },
    ]);
  });
});
