const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  devServer: {
    port: 8040,
  },
  configureWebpack: {
    plugins: [new HardSourceWebpackPlugin()],
  },
};
