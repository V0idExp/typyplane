const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DATA_DIR = path.resolve(__dirname, 'data');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TypyPlane',
      favicon: path.resolve(DATA_DIR, 'favicon.ico'),
    }),
    new CopyWebpackPlugin([
      {
        from: DATA_DIR,
        to: DIST_DIR,
        test: /\.png$/,
      }
    ]),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //     importLoaders: 1,
          //     localIdentName: "[name]_[local]_[hash:base64]",
          //     sourceMap: true,
          //     minimize: true
          //   }
          // }
        ]
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     // 'style-loader',
      //     'typings-for-css-modules-loader',
      //   ],
      // },
    ],
  },
};
