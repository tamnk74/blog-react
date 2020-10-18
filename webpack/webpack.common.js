const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      utils: path.resolve(__dirname, '../src/utils/'),
      features: path.resolve(__dirname, '../src/features/'),
      customFields: path.resolve(__dirname, '../src/customFields/'),
    },
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
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
      API_URL: 'http://localhost:3000',
      GOOGLE_CLIENT_ID: '',
      FACEBOOK_APP_ID: '',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://blog5s.herokuapp.com',
    }),
  },
};
