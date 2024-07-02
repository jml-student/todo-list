const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        hot: true,
        open: true
    },
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Todo List',
        template: './src/index.html',
        favicon: './svg/list-box-outline.svg'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};