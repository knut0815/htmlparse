import buble from "rollup-plugin-buble";

export default {
  entry: "src/index.js",
  moduleName: "parser",
  plugins: [ buble() ],
  targets: [
    { dest: "dist/parser.js", format: "umd" }
  ]
};