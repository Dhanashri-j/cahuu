const webpack = require('webpack'),
    dotEnv = require('dotenv'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

dotEnv.load({ path: path.join(__dirname, '.env') });

const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    DIST_DIR = path.resolve(__dirname, 'dist'),
    WEB_DIR = path.resolve(__dirname, 'web'),
    COMMON_DIR = path.resolve(__dirname, 'common'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    isProduction = process.env.ENV === 'production',
    extractCSS = new ExtractTextPlugin('[name].fonts.css'),
    extractSCSS = new ExtractTextPlugin('[name].styles.css');

const plugins = [
    extractCSS,
    extractSCSS,
    new HtmlWebpackPlugin({
        template: `${WEB_DIR}/index.html`,
        minify: {
            removeStyleLinkTypeAttributes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            minifyURLs: true,
            minifyCSS: true,
            minifyJS: true
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
    }),
    new CopyWebpackPlugin([

    ],
        { copyUnmodified: false }
    )
];

const config = {

    entry: {
        index: `${WEB_DIR}/index.jsx`,
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'redux',
            'redux-thunk',
            'reactstrap',
            'react-toastify'
        ]
    },

    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    devtool: isProduction ? '' : 'source-map',

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.join(WEB_DIR, 'src'), 'node_modules'],
        alias: {
            common: COMMON_DIR
        }
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: [WEB_DIR, COMMON_DIR],
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(?:gif|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(scss)$/,
                use: ['css-hot-loader'].concat(extractSCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { alias: { '../img': 'images' } }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }))
            }
        ]
    },

    plugins

};

module.exports = config;
