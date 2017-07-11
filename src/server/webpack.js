import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

export default function (app) {
    const config = webpackConfig();
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler), { noInfo: true, publicPath: config.output.publicPath  });
    app.use(webpackHotMiddleware(compiler));
}
