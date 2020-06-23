const path = require("path") 
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'client'
    },
    mode: 'production',
    node: {
        fs: "empty"
     },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules|server/,
                loader: "babel-loader"
            },
            {
                test: /\.(scss)$/,
                use: [{
                loader: MiniCssExtractPlugin.loader, // inject CSS to page
                }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                loader: 'postcss-loader', // Run postcss actions
                options: {
                    plugins: function () { // postcss plugins, can be exported to postcss.config.js
                    return [
                        require('autoprefixer')
                    ];
                    }
                }
                }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW()
    ]
}

