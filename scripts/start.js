process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled promise rejections instead of silently
process.on('unhandledRejection', err => {
    throw err;
});

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack({
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'static/js/bundle.js',
        publicPath: '/'
    }
});


compiler.watch(
    {
        // https://webpack.js.org/configuration/watch/#watchoptions
        aggregateTimeout: 300, // 重新构建前增加延迟，聚合多次更改到一次重新构建里；默认值 300， 单位 ms
        poll: undefined,
    },
    (err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();
        if (stats.hasErrors()) {
            console.error(info.errors);
        }
        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }
    }
);
