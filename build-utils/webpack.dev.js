const Dotenv = require('dotenv-webpack')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true
  }
}
