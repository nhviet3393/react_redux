module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0' //use spread operator ...
          ]
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
