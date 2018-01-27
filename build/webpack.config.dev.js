const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.dev.js')
    },
    output: {
        path: path.resolve(__dirname, '../dev'),
        filename: '[name].boundle.js',
        libraryTarget: 'umd',
        crossOriginLoading: "anonymous"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dev', //webpack-dev-server 热加载
        hot: true,
        compress: true,
        port: 9000
    },
    module: {
        rules: [{ //babel es6->es5
                test: /\.js$/,
                //include: [path.resolve(__dirname, "../src")],
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [
                        'transform-object-rest-spread'
                    ]
                }

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
                test: /\.css$/,
                loader: ['css-loader', 'style-loader']
            },
            {
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
    plugins: [
        new webpack.DefinePlugin({
            BUILD_MODE: JSON.stringify('dev')
        }),
        new CleanWebpackPlugin(['../dev']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     filename: 'vendors.[hash].js',
        //     minChunks: Infinity
        // }),
        new CopyWebpackPlugin([{ //插件的起始目录是根目录
                from: './node_modules/iview/dist/styles',
                to: 'css'
            },
            // { //插件的起始目录是根目录
            //     from: './src/imgs',
            //     to: 'css'
            // }
        ]),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.resolve(__dirname, '../html/index.dev.html'),
            filename: 'index.html',
            inject: false
        }),
    ],
    resolve: {
        extensions: ['.css', '.scss', '.js', '.vue', '.json', '.jpg'],
        alias: {
            'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.common.js')
        }
    },

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

}