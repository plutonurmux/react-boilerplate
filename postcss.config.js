var path = require('path');
var importPlugin = require('postcss-import');
var cssNextPlugin = require('postcss-cssnext');
var nestedPlugin = require('postcss-nested');
var postcssFor = require('postcss-for');

module.exports = {
    plugins: [
        importPlugin({
            path: [path.join(__dirname, 'src/resources/css')]
        }),
        postcssFor,
        nestedPlugin,
        cssNextPlugin({
            browsers: ['last 2 versions', 'Firefox >= 47', 'Chrome >= 49', 'Safari >= 9']
        })
    ]
};
