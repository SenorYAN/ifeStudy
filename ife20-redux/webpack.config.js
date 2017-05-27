var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: {
    babelP: "babel-polyfill",
    main: path.resolve(appDirectory, 'src/main.js'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(appDirectory, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: '/',
    inline: true,
    port: 5000
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename:"vendor.bundle.[hash].js"
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(appDirectory, 'src/index.html'),
        inject: true,
        hash: true
    })
  ]
}