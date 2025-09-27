// Deno wrapper for envinfo using Node compatibility and npm: specifiers
// Permissions required: --allow-run --allow-read --allow-env --allow-sys

// Import CommonJS packages via Deno's Node/npm compatibility
import minimist from "npm:minimist@^1.2.8";
import envinfoCjs from "npm:envinfo@7";

// Normalize CommonJS default export interop
// deno-lint-ignore no-explicit-any
const envinfo: any = (envinfoCjs as any).default ?? (envinfoCjs as any);

// Parse CLI args to match Node's minimist semantics
const argv = minimist(Deno.args);
// Ensure console output is enabled by default for CLI usage
(argv as Record<string, unknown>).console = true;

// Run the existing CLI entry exported by envinfo
// It prints to console if argv.console is true, and also returns the formatted string
await envinfo.cli(argv);

