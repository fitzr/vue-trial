module.exports = {
  entry: './src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: ['\\.vue$'],
              },
            },
          },
          esModule: true,
        },
      }
    ]
  },

};
