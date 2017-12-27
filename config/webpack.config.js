const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.resolve(__dirname, '../');
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {

} else {

}

module.exports = {
    devtool: 'source-map', // source-map, cheap-module-source-map, eval-source-map, cheap-module-eval-source-map
    devServer: {
        contentBase: path.resolve(rootDir, './public'),
        port: 3000,
        inline: true, // 源文件改动时刷新页面
        hot: true,
        historyApiFallback: true, // 单页应用，所有path指向index.html
        compress: true, // gzip
    },
    entry: { // string | array | object
        index: path.resolve(rootDir, './src/index.js')
    },
    output: {
        path: path.resolve(rootDir, './build'),
        filename: '[name].[hash].js',
        publicPath: '/public/'
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            // a list of module name aliases
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    }
                }
            },
            {
                test: /\.(svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin('@author common0sky'),
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, './public/index.html'),
            favicon: path.resolve(rootDir, './public/favicon.ico'),
            filename: '../index.html'
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin('style.[name].[contenthash].css'),
    ],
};
