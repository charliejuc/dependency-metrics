import { MapModule } from "../types";

export const mapDependentsLength = (
  module: MapModule
): MapModule & { dependentsLength: number } => {
  const { source, dependents } = module.module;

  return {
    module,
    source,
    dependentsLength: dependents?.length ?? 0,
  };
};
