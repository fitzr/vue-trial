module.exports = {
  entry: __dirname + '/src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader?minimize=false' },
      { test: /\.vue$/, loader: 'vue-loader' },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    modules: [
      "node_modules"
    ],
  }
};
