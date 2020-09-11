const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
    target: "node",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
    ],
    resolve: {
        extensions: ['*', '.js','.json'],
        alias: {
            '@package': path.resolve(__dirname, './package.json'),
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        libraryTarget: 'commonjs2',
        filename: 'index.js'
    },
    devServer: {
        contentBase: './dist'
    }
};
