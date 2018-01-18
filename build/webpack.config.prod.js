const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.prod.js',
  output: {
    filename: '[name].boundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    crossOriginLoading: "anonymous"
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: [path.resolve(__dirname, "../src")],
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            'transform-object-rest-spread'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.vue$/,
        use: [
          'vue-loader',
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.vue', '.json', '.scss', '.less'],
    alias: {
      'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.common.js'),
      'COM': path.resolve(__dirname, '../src/components')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      BUILD_MODE: JSON.stringify('prod')
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, '../html/index.prod.html'),
      filename: 'index.html',
      inject: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: [
    function (context, request, callback) {
      if (/^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^dgrid/.test(request) ||
        /^dstore/.test(request) ||
        /^moment/.test(request) ||
        /^esri/.test(request)) {
        return callback(null, 'umd ' + request);
      }
      callback();
    }
  ]
};