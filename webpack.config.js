const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },
  devtool: "inline-source-map",
  watch: true,
  externals: {
    react: 'react'
  }
}