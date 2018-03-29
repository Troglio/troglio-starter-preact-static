const ExtractTextPlugin = require("extract-text-webpack-plugin")
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
// import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin'


export const extractTextPlugin = new ExtractTextPlugin({filename:'styles.[hash:8].css', allChunks: true })


export const uglifyJSPlugin = new UglifyJSPlugin({
  cache: true,
  parallel: true,
  sourceMap: false,
  uglifyOptions: {
    ie8: false,
    ecma: 8,
    toplevel: true,
    mangle: {
      safari10: true,
      toplevel: true
    },
    output: {
      comments: false,
      beautify: false,
      ascii_only: true
    },
    compress: {
      dead_code: true
    },
    warnings: false
  }
})

// export const serviceWorker = new SWPrecacheWebpackPlugin({
//   cacheId: 'www.taximow.com',
//   dontCacheBustUrlsMatching: /\.\w{8}\./,
//   filename: 'sw.js',
//   minify: true,
//   navigateFallback: `${publicUrl}/index.html`,
//   staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
// })