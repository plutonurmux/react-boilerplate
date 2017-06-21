require.extensions['.png'] = function () {
    return;
};
require.extensions['.jpg'] = function () {
    return;
};
require.extensions['.ico'] = function () {
    return;
};
require.extensions['.css'] = function () {
    return;
};

require('./server.js');

/*
** Solution refer to
   https://github.com/webpack/webpack/issues/1754
*/

/*
** Another way to avoid server side load css file

require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]',
    prepend: [
        importPlugin({
            path: ['./somepage/']
        }),
        postcssFor,
        nestedPlugin,
        cssNextPlugin({ browsers: ['last 2 versions'] })
    ],
    extensions: ['.css']
});

** https://github.com/css-modules/css-modules-require-hook
*/
