const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client", "Reservation.jsx"),
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: "/public",
    filename: "bundle.js"
  },
  // resolve: {extensions: ["*", ".js", ".jsx"]},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-env",
            "airbnb"
          ],
        },
      },
    ],
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "public/"),
  //   port: 3000,
  //   publicPath: "http://localhost:9001/",
  //   hotOnly: true
  // },
  devtool: "inline-source-map",
  watch: true,
  // externals: {
  //   react: 'react'
  // }
};
