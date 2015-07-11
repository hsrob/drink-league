var path = require('path');
var config ={
        context: __dirname + path.sep + 'static' + path.sep + 'scripts',
        entry: './app.jsx',
        output:{
            path: __dirname + path.sep + 'static' + path.sep + 'scripts' + path.sep + 'dist',
            filename: 'bundle.js'
        },
        resolve:
        {
            alias:
            {
                'npm': __dirname + path.sep + 'node_modules'
            }
        },
        module:{
            loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
                },
                {
                    test: /\.less$/,
                    loader: 'style!css!less'
                },
                {
                    test: /\.(woff|woff2)$/,
                    loader: 'url?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.(eot|svg|ttf)$/,
                    loader: 'file'
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel?stage=0'
                }
            ]
        }
    };

module.exports = config;