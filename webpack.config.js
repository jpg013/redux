module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
    publicPath: 'dist/'
  },
  module: {
     loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
     }]
  },
  watch: true
};
