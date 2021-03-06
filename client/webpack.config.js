const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    devServer: {
      hot: true,
      static: './dist',
    },
    plugins: 
    [
      new HtmlWebpackPlugin({
        title: 'PWA',
        template: './index.html',
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        exclude: [/\.map$/, /asset-manifest\.json$/],
      }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new WebpackPwaManifest({
      name: 'PWA',
      short_name: 'PWA',
      description: 'Text editor',
      background_color: '#7eb4e2',
      theme_color: '#7eb4e2',
      start_url: '/',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('favicon.ico'),
          sizes: [96],
          destination: path.join('assets', 'icons'),
        },
      ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
  };
};
