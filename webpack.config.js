let path = require('path');

module.exports = {
  entry: "./front/app.js",
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
