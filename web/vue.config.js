const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  devServer: {
    port: 7450,
  },
  configureWebpack: {
    plugins: [new HardSourceWebpackPlugin()],
  },
};
