const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = dirname => ({
  output: {
    filename: '[hash].bundle.js',
    chunkFilename: '[id].[chunkhash].lazy.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new WebpackPwaManifest({
      name: 'FutureCard',
      short_name: 'FutureCard',
      description: 'FutureCard Industries LLC',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      theme_color: '#ffffff',
      inject: true,
      icons: [
        // {
        //   src: path.resolve('src/assets/image/icon.png'),
        //   sizes: [192, 512], // multiple sizes
        // },
      ],
    }),
    new RobotstxtPlugin({
      sitemap: 'https://abluelemon.com/sitemap.xml',
      host: 'https://abluelemon.com',
    }),
    new SitemapPlugin('https://futurecard.com', ['/about-futurecard']),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new ImageminPlugin({ test: '/image/' }),
    // new ImageminPlugin({
    //   pngquant: { quality: '50' },
    //   plugins: [imageminMozjpeg({ quality: '75' })],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
