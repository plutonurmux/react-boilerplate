var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/server/server.js'
    ],
    target: 'node',
    output: {
        path: path.resolve('build'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:[{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets:[ 'es2015', 'react', 'stage-2']
                }
            }]
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }, {
                loader: 'postcss-loader'
            }]
        }]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
        modules: ['node_modules', 'src/pages', 'src/common/components'],
        extensions: ['.js', '.jsx'],
        alias: {
        }
    }
};
