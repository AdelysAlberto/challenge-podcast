const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  name: "client",
  entry: {
    client: path.resolve(__dirname, "src/index.tsx"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname + "/dist/static"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.client.json",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  target: "web",
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};
