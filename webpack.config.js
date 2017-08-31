const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: __dirname + '/app/js/main.js',
    output: {
        path: __dirname + '/public/',
        filename: 'boundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname + '/public/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                { loader: 'babel-loader' }
            ],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader"
            })
        }, {
            test: /(\.jpg|\.png|\.gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                }
            }, ]
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/template/index.html",
            hot: true
        }),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(__dirname + '/public/'),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin()
    ]
}