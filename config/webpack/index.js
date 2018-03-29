const autoprefixer = require("autoprefixer")
const extractTextWebpackPlugin = require("extract-text-webpack-plugin")
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssNested = require('postcss-nested')

const _autoprefixer = _interopRequireDefault(autoprefixer)
const _extractTextWebpackPlugin = _interopRequireDefault(extractTextWebpackPlugin)
const _postcssFlexbugsFixes = _interopRequireDefault(postcssFlexbugsFixes)
const _postcssNested = _interopRequireDefault(postcssNested)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

  
const autoprefixerOpts = {
    browsers: [ '>1%', 'last 4 versions', 'Firefox ESR', 'safari 9', 'not ie < 9'],
    flexbox: 'no-2009'
}
const postCSSLoaderOpts = {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
        require('postcss-flexbugs-fixes'),
        _autoprefixer.default(autoprefixerOpts),
        _postcssNested.default
    ]
}

const postCSSLoaderOptsWithoutNested = {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
        require('postcss-flexbugs-fixes'),
        _autoprefixer.default(autoprefixerOpts)
    ]
}

const extractTextPlugin = new extractTextWebpackPlugin({filename:'styles.[hash:8].css', allChunks: true })

const webpack = (config, { stage, defaultLoaders }) => {

    console.log("stage is " + stage)   

    config.module.rules = [
        {
            oneOf: [
                {
                    test: /\.less$/,
                    use:
                      stage === 'dev'
                        ? [
                            { loader: 'style-loader' },
                            { 
                                loader: 'css-loader', 
                                options: {
                                    modules: true, 
                                    localIdentName: '[name]__[local]___[hash:base64:5]', 
                                    importLoaders: 1 
                                } 
                            },
                            { loader: 'postcss-loader', options: postCSSLoaderOptsWithoutNested },
                            { loader: 'less-loader' }
                        ]
                        : _extractTextWebpackPlugin.default.extract({
                          use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    minimize: true,
                                    sourceMap: false,
                                    localIdentName: '[hash:base64:5]'
                                },
                            },
                            { loader: 'postcss-loader', options: postCSSLoaderOptsWithoutNested } ,
                            { loader: 'less-loader' },
                          ],
                        }),
                },
                {
                    test: /\.css$/,
                    use: 
                        stage === 'dev'
                        ? [ {   loader: 'style-loader' }, 
                            { 
                                loader: 'css-loader', 
                                options: {
                                    modules: true, 
                                    localIdentName: '[name]__[local]___[hash:base64:5]', 
                                    importLoaders: 1 
                                } 
                            },
                            { loader: 'postcss-loader', options: postCSSLoaderOpts } 
                        ]
                        : _extractTextWebpackPlugin.default.extract({
                            fallback: 'style-loader',
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 1,
                                        modules: true,
                                        minimize: true,
                                        sourceMap: false,
                                        localIdentName: '[hash:base64:5]'
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: postCSSLoaderOpts
                                }
                            ]
                        })
                },
                defaultLoaders.jsLoader,
                defaultLoaders.fileLoader
            ]
        }
    ]

    return config
}
  
export default webpack
