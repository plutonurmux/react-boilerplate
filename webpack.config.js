var path = require('path');

module.exports = function () {
    var webpackConfig = {
        entry: {
            app: ['babel-polyfill', './src/client/app.js']
        },
        target: 'web',
        output: {
            path: path.resolve('build'),
            filename: 'client.js'
        },
        devtool: '#eval',
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
        plugins: [],
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
