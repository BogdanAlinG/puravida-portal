import fs from "node:fs";
import path from "node:path";

const SCHEMA_URL = "https://openapi.vercel.sh/vercel.json";
const expectedProductionBranch = process.argv[2];

if (!expectedProductionBranch) {
  console.error("Usage: node scripts/verify-vercel-production-only.mjs <production-branch>");
  process.exit(1);
}

const configPath = path.join(process.cwd(), "vercel.json");
let config;

try {
  config = JSON.parse(fs.readFileSync(configPath, "utf8"));
} catch (error) {
  console.error(`Unable to parse ${configPath}: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}

const failures = [];
const deploymentEnabled = config.git?.deploymentEnabled;

if (config.$schema !== SCHEMA_URL) {
  failures.push(`$schema must be ${SCHEMA_URL}`);
}

if (
  !deploymentEnabled ||
  typeof deploymentEnabled !== "object" ||
  Array.isArray(deploymentEnabled)
) {
  failures.push("git.deploymentEnabled must be an object");
} else {
  if (deploymentEnabled[expectedProductionBranch] !== true) {
    failures.push(`git.deploymentEnabled.${expectedProductionBranch} must be true`);
  }

  if (deploymentEnabled["*"] !== false) {
    failures.push('git.deploymentEnabled["*"] must be false');
  }

  if (deploymentEnabled["**"] !== false) {
    failures.push('git.deploymentEnabled["**"] must be false');
  }
}

if (failures.length > 0) {
  console.error("Vercel production-only deployment policy check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(
  `Vercel production-only deployment policy is enforced for ${expectedProductionBranch}.`,
);
