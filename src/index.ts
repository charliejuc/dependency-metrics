import minimist from "minimist";
import { metricsCalculatorByPercentile } from "./lib/metricts";

const argv = minimist(process.argv.slice(2));

const paths = argv._;
const percentile = Number(argv.percentile ?? 0.9);

(async () => {
  console.log(await metricsCalculatorByPercentile(paths, percentile));
})();
