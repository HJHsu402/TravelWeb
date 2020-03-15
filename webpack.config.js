const path = require("path");
const webpack = require("webpack");
const TransferWebpackPlugin = require('transfer-webpack-plugin')
module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/env"]
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Config: __dirname + '/config.json'
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: '/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "www/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    contentBase: './',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin([{
      from: 'www'
    },], path.resolve(__dirname)),

  ]
};