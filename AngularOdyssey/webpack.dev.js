var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var ignore = new webpack.IgnorePlugin(new RegExp("/(^fs$|cptable|jszip|xlsx|xls|^es6-promise$|^net$|^tls$|^forever-agent$|^tough-cookie$|cpexcel|^path$)/"))
//var helpers = require('./webpack.helpers');

console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = {

    devtool: 'source-map',
    performance: {
        hints: false
    },
    entry: {
        /*'polyfills': './angularApp/polyfills.ts',*/
        'app': './tsScripts/main.ts',
        'vendor': [
            'core-js/client/shim.min.js',
            'zone.js/dist/zone',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            //'reflect-metadata', //When I comment reflect-metadata, no more error
            'rxjs',
            'ng2-table',
            'ng2-bootstrap'
        ]
    },

    output: {
        path: __dirname + '/libs/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        //publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
        alias: {
            // bind version of jquery-ui
            "jquery-ui": "jquery-ui/ui",
            // bind to modules;
            modules: path.join(__dirname, "node_modules"),
        }
    },
    externals: [
        {
            './cptable': 'var cptable'
        }
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    //'angular-router-loader',
                    //'angular2-template-loader',
                    //'source-map-loader',
                    //'tslint-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                loader: 'file-loader?name=/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.exec.js$/,
                use: ['script-loader']
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),

        new CleanWebpackPlugin(
            [
                './libs',
            ]
        ),

        new CopyWebpackPlugin([
            { from: './node_modules/ng2-toaster/bundles/*.css', to: './assets', flatten: true },
            { from: './node_modules/gridstack/dist/*.css', to: './assets', flatten: true },
            { from: './node_modules/underscore/underscore.js', to: './assets', flatten: true },
            { from: './node_modules/gridstack/dist/gridstack.js', to: './assets', flatten: true },
            { from: './node_modules/jquery-ui-bundle/jquery-ui.css', to: './assets', flatten: true },
            { from: './node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js', to: './assets', flatten: true },
            { from: './node_modules/ng2-toastr/bundles/ng2-toastr.min.css', to: './assets', flatten: true },
            { from: './node_modules/bootstrap-confirmation2/bootstrap-confirmation.min.js', to: './assets', flatten: true }
        ]),
        ignore
    ]

};

