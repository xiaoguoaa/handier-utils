import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { dts } from "rollup-plugin-dts";
const config = [
  {
    input: "src/index.ts",
    output: {
      dir: "lib",
      format: "es",
    },
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      json(),
      resolve(),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "lib",
    },
    plugins: [dts()],
  },
];

export default config;
