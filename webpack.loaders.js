const path = require('path');

const sassIncludePaths = [
    path.resolve(__dirname, 'src/styles')
];

const sassResourcesPaths = [
    path.resolve(__dirname, 'src/styles/abstracts/_variables.sass'),
    path.resolve(__dirname, 'src/styles/abstracts/_fonts.sass'),
    path.resolve(__dirname, 'src/styles/abstracts/_mixins.sass'),
];

module.exports = [
    {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader?compact=false',
        exclude: /node_modules/,
        options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel']
        }
    },
    {
        test: /\.gif/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/gif'
                }
            }
        ]
    },
    {
        test: /\.jpg/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/jpg'
                }
            }
        ]
    },
    {
        test: /\.png/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/png',
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    {
        test: /\.svg/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/svg+xml',
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'file-loader',
                options: {
                    // limit: 10000,
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    {
        test: /\.css/,
        include: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
        ]
    },
    {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/styles/base'),
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    camelCase: 'dashes',
                    importLoaders: 1
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: 'inline'
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    outputStyle: 'expanded',
                    indentedSyntax: 'sass',
                    includePaths: sassIncludePaths,
                    // options: { sourceMap: true, data: '$env: prod;' },
                }
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: sassResourcesPaths
                }
            }
        ]
    },
    {
        test: /\.(sass|scss)$/,
        exclude: path.resolve(__dirname, 'src/styles/base'),
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    camelCase: 'dashes',
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: 'inline'
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    outputStyle: 'expanded',
                    indentedSyntax: 'sass',
                    includePaths: sassIncludePaths
                }
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: sassResourcesPaths
                }
            }
        ]
    }

];
