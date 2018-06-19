module.exports = {
  mode: 'development',
  entry: __dirname + '/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader?minimize=false' },
    ]
  },
  resolve: {
    extensions: ['.ts'],
    modules: [
      "node_modules"
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
