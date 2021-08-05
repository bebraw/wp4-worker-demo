const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "webpack-plugin-serve/client"],
  plugins: [
    new WorkerPlugin({ globalObject: "window" }),
    new MiniHtmlWebpackPlugin(),
    new WebpackPluginServe({ port: 3000, static: "./dist" }),
  ],
  watch: true,
};
