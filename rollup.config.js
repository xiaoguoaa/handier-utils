import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.min.js",
      format: "iife",
      name: "version", // iife 模式要指定 name
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
