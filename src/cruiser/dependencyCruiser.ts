import { exec } from "child_process";
import { promisify } from "util";
import { MapModule } from "../types";

const execAsync = promisify(exec);

/**
 * Runs the dependency-cruiser command on a list of files or directories and returns the JSON output.
 * @param paths Array of file or directory paths to analyze.
 * @returns A promise that resolves with the JSON output of dependency-cruiser.
 */
export async function dependencyCruiser(paths: string[]): Promise<any> {
  const command = `npx depcruise --exclude ".*node_modules.*" --output-type json ${paths.join(
    " "
  )}`;

  try {
    const { stdout, stderr } = await execAsync(command);

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      throw new Error(`Command error: ${stderr}`);
    }

    return JSON.parse(stdout);
  } catch (error) {
    throw new Error(`exec error: ${error}`);
  }
}

export const toMapModule = (module: any): MapModule => {
  return {
    module,
    source: module.source,
  };
};
