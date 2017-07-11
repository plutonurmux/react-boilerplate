var path = require('path');
var webpack = require('webpack');

module.exports = function () {
    var webpackConfig = {
        entry: {
            app: [
                'babel-polyfill',
                'react-hot-loader/patch',
                './src/client.js',
                'webpack-hot-middleware/client'
            ]
        },
        target: 'web',
        output: {
            path: path.resolve('build'),
            filename: 'client.js',
            publicPath: '/'
        },
        devtool: 'cheap-source-map',
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
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
                    loader: 'style-loader',
                }, {
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
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        resolve: {
            modules: ['node_modules', 'src/pages', 'src/common/components'],
            extensions: ['.js', '.jsx'],
            alias: {}
        },
        resolveLoader: {
        }
    };
    return webpackConfig;
};
