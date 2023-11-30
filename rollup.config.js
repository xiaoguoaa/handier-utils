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
      dir: "dist",
      format: "cjs",
    },
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      json(),
      resolve(),
      babel({ babelHelpers: "bundled" }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
    },
    plugins: [dts()],
  },
];

export default config;
