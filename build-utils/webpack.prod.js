const path = require('path')
const Dotenv = require('dotenv-webpack')
module.exports = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production')
    })
  ]
}
