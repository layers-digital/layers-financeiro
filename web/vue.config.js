import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

export default {
  devServer: {
    port: 8040,
  },
  configureWebpack: {
    plugins: [new HardSourceWebpackPlugin()],
  },
};
