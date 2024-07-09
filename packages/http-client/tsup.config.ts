import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    entry: ["src/**/*.ts"],
    // format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: true,
  };
});
