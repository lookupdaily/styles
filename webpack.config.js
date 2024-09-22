const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          globOptions: {
            ignore: ["**/*.test.scss", "**/_test.scss"],
          },
          to: ".",
          context: "scss/",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
