const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  name: "server",
  entry: {
    server: path.resolve(__dirname, "server", "server.ts"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.server.json",
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
  target: "node",
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: "server", from: "views", to: "views" }],
    }),
  ],
};
