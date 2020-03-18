const paths = require("./paths");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    library: "dsb_designsystem",
    libraryTarget: "var",
    publicPath: "/",
    filename: "[name].[contenthash].bundle.js"
  },
  plugins: [
    /**
     * MiniCssExtractPlugin
     *
     * Extracts CSS into separate files.
     *
     * Note: style-loader is for development, MiniCssExtractPlugin is for production.
     * They cannot be used together in the same config.
     */
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].css"
    }),

    /**
     * EsmWebpackPlugin
     *
     * Output an ESM library from your bundle.
     * Adds export statements to the end of the bundle for the exported members.
     *
     * note: output code is not tree shakable
     */
    new EsmWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  /**
   * Optimization
   *
   * Production minimizing of JavaSvript and CSS assets.
   */
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    // note: this makes the esm-plugin fail
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    // runtimeChunk: "single",
    // Don't change hashes on output files, if the content on the file hasn't changed.
    // moduleIds: 'hashed',
    // This breaks apart commonly shared deps (react, semantic ui, etc) into one shared bundle. React, etc
    // won't change as often as the app code, so this chunk can be cached separately from app code.
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/,
    //       name: "vendors",
    //       chunks: "all"
    //     }
    //   }
    // }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
