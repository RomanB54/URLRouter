import 'webpack-dev-server';
import * as webpack from 'webpack';
import { resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type Mode = 'none' | 'development' | 'production' | undefined;

export const NODE_ENV: Mode = process.env.NODE_ENV as Mode;

export const PREFIX = '/URLRouter/';

const isProd = NODE_ENV === 'production';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false,
    },
    publicPath: NODE_ENV === 'production' ? PREFIX : '/',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: '404.html',
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(isProd),
      PREFIX: JSON.stringify(PREFIX),
      PUBLIC_URL: JSON.stringify(isProd ? PREFIX : '/'),
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['public/index.html'],
    historyApiFallback: true,
  },
};

export default config;
