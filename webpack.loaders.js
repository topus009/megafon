const path = require('path');

// Options passed to node-sass
const sassIncludePaths = [
    path.resolve(__dirname, 'src/styles')
];

// These files will be imported in every sass file
const sassResourcesPaths = [
    path.resolve(__dirname, 'src/styles/abstracts/_fonts.sass'),
    path.resolve(__dirname, 'src/styles/abstracts/_mixins.sass'),
];

// noinspection WebpackConfigHighlighting
module.exports = [
    // =========
    // = Babel =
    // =========
    // Load jsx extensions with babel so we can use
    // 'import' instead of 'require' and es6 syntax
    // {
    //     test: /\.jsx?$/,
    //     include: path.resolve(__dirname, 'src'),
    //     loader: 'babel-loader?compact=false',
    //     exclude: /node_modules/,
    //     options: {
    //         // This is a feature of `babel-loader` for Webpack (not Babel itself).
    //         // It enables caching results in ./node_modules/.cache/babel-loader/
    //         // directory for faster rebuilds.
    //         cacheDirectory: true,
    //         plugins: ['react-hot-loader/babel']
    //     }
    // },
    {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
    },
    { enforce: 'pre', test: /\.js$/, loader: "source-map-loader" },
    // ==========
    // = Images =
    // ==========
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
    // ==========
    // = Fonts =
    // ==========
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
    // ==========
    // = Styles =
    // ==========
    // Global CSS (from node_modules)
    // ==============================
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
    // Global SASS (from app)
    // ===============================
    // Do not modularize these imports
    // (leave them as global css styles)
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
    },
    // Local SASS css-modules
    // ======================
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
