var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server.js',
    './main.js'
  ],
  output: {
    publicPath: '/dist/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.vue$/, loader: 'vue-loader'}
    ]
  },
  // hot relaod
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // 預設匯出 runtime-only版本 因此定義匯出 standalone完整版 差異在完整版有編譯器，並且支援template 以及使用瀏覽器API
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}