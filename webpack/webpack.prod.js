const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
});
