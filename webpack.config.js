import path from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: {
    script: './src/js/script.js',
    indexScript: './src/js/indexScript.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'src/js/[name].[contenthash].js',
    assetModuleFilename: '[path]/[name]-[hash][ext]',
    clean: true
  },
   optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify
                },
            }),
        ],
    },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    chunks: ['script', 'indexScript']
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    template: './src/about.html',
    chunks: ['script']
  }),
  new MiniCssExtractPlugin({
    filename: 'src/css/main.[contenthash].css'
  })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ],
  },
}