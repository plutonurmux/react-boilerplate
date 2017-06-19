var path = require('path');

module.exports = function () {
    var webpackConfig = {
        entry: {
            app: ['babel-polyfill', './src/client/app.js']
        },
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
            }]
        },
        plugins: [],
        resolve: {
            modules: ['node_modules', 'src/pages', 'src/common/components'],
            extensions: ['.js', '.jsx'],
            alias: {
            }
        },
        resolveLoader: {
        }
    };
    return webpackConfig;
};
