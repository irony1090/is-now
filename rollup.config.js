import pkg from "./package.json";
import pluginTypescript from "rollup-plugin-typescript2";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import * as path from "path";
const moduleName = pkg.name.replace(/^@.*\//, '');
const inputFileName = "src/index.ts";
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author.name}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;
const typescriptConfig = {
  useTsconfigDeclarationDir: false,
  // declarationDir: './types',
  exclude: [ 'test/**/*.ts' ]
}
export default [

  {
    input: inputFileName,
    output: [
      {
        name: moduleName.replace('-', '_'),
        file: pkg.browser,
        format: "umd",
        // sourcemap: "inline",
        // exports: "named",
        banner,
      }
      // {
      //   name: moduleName.replace('-', '_'),
      //   file: pkg.browser.replace(".js", ".min.js"),
      //   format: "iife",
      //   // sourcemap: "inline",
      //   exports: "named",
      //   banner,
      //   // plugins: [terser()],
      // },
    ],
    // preserveModules: true,
    plugins: [
      pluginTypescript(typescriptConfig),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: true,
      }),
    ],
  },

  // ES
  {
    input: inputFileName,
    output: [
      {
        // dir: 'dist',
        file: pkg.module,
        format: "es",
        // sourcemap: "inline",
        // sourcemap: true,
        banner,
        exports: "named",
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    // preserveModules: true,
    plugins: [
      pluginTypescript(typescriptConfig),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },

  // // CommonJS
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        // sourcemap: "inline",
        banner,
        exports: "default",
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(typescriptConfig),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
];