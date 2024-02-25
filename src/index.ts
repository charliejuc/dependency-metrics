import minimist from "minimist";
import { metricsCalculatorByPercentile } from "./lib/metrics";

const argv = minimist(process.argv.slice(2));

const paths = argv._;
const percentile = argv.percentile ? Number(argv.percentile) : undefined;

(async () => {
  console.log(await metricsCalculatorByPercentile(paths, percentile));
})();
