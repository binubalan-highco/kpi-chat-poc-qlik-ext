const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const qlickPath = 'C:\\Users\\jeffrey.bonson\\Documents\\Qlik\\Sense\\Extensions\\KPIChatPocQlikExt\\';
// const qlickPath = './dist/';
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.ts'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.html', '.js', '.json']
    },
    output: {
        path: path.resolve(qlickPath),
        filename: "app.js",
        library: '',
        libraryTarget: "amd"
    },
    target: 'web',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./html/index.html"
        }),
        new CopyWebpackPlugin([
            { from: 'qlik' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(tsx|ts|js)?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    //Enable sourcemaps for debugging webpack's output
    devtool: "source-map"
};
