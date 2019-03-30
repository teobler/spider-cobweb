const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    index: './admin/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'spider-cobweb',
      template: 'index.html',
    }),
  ],
});
