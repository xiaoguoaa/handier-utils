import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
export default {
  input: "src/main.js",
  // output: [
  //   {
  //     // file: "dist/index.js",
  //     dir: "dist",
  //     format: "cjs",
  //   },
  //   {
  //     // file: "dist/index.min.js",
  //     dir: "dist",
  //     format: "iife",
  //     name: "version", // iife 模式要指定 name
  //     plugins: [terser()],
  //   },
  // ],
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [json(), resolve(), babel({ babelHelpers: "bundled" })],
};
