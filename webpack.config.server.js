var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

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
    externals: nodeModules,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets:[ 'es2015', 'react', 'stage-2']
            }
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
    resolve: {
        modules: ['node_modules', 'src/pages', 'src/common/components'],
        extensions: ['.js', '.jsx'],
        alias: {
        }
    }
};
