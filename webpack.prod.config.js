const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'production',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils/'),
      features: path.resolve(__dirname, 'src/features/'),
      customFields: path.resolve(__dirname, 'src/customFields/'),
    },
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
      DEBUG: false,
      API_URL:
        'https://cors-anywhere.herokuapp.com/http://blog5s.herokuapp.com',
      GOOGLE_CLIENT_ID: '',
      FACEBOOK_APP_ID: '',
    }),
  ],
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'https://cors-anywhere.herokuapp.com/http://blog5s.herokuapp.com',
    }),
  },
};
