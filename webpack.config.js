var path = require("path");
var webpack = require("webpack");
var bower_dir = __dirname + '/bower_components';
var npm_dir = __dirname + '/node_modules';

module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'paper': 'paper'
        })
    ],
    resolve: {
        alias: {
            'jquery': npm_dir + '/jquery/dist/jquery.min.js',
            "paper": npm_dir + "/paper/dist/paper.js",
            "FileSaver": bower_dir + "/file-saver/FileSaver.js" // added alias for react-dom
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    }
}

