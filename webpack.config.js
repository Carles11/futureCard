const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const path = require('path');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      entry: ['./src/index.js'],
      mode,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: {
              loader: 'babel-loader',
              options: {},
            },
            exclude: '/node_modules/',
          },
          {
            test: /\.(jpg|jpeg|png|ico|gif|ttf)$/,
            use: [{ loader: 'url-loader', options: { limit: 5000 } }],
          },
          {
            test: /\.mp4$/,
            use: 'file-loader',
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
<<<<<<< HEAD
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './src/assets/logos/favicon.ico',
      }),
      new webpack.ProgressPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@src': path.resolve(__dirname, 'src'),
=======
      resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@src': path.resolve(__dirname, 'src'),
        },
>>>>>>> master
      },
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] }),
  );
