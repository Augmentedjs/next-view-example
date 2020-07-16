const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const Package = require("./package.json");
const NAME = "Augmented Next 3.x View Example";
const LOGO = "./src/images/jenson-silo-circle-small.png";

const isProd = process.argv[process.argv.indexOf("--mode") + 1] === "production";

console.info(`Mode: ${((isProd) ? "Production" : "Development")}`);

module.exports = {
  entry: ["./src/index.js"],
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", options: {
              sourceMap: isProd ? false : true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: isProd ? false : true
            }
          }
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: isProd ? false : "cheap-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      APP_NAME: JSON.stringify("View Examples"),
      APP_TITLE: JSON.stringify(NAME),
      DESCRIPTION: JSON.stringify(Package.description),
      AUTHOR: JSON.stringify(Package.author),
      WEBSITE: JSON.stringify(Package.homepage),
      AUTO_INVOKE: true,
      GA: isProd ? true: false
    }),
    new HtmlWebPackPlugin({
      title: NAME,
      meta: {
        viewport: "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, viewport-fit=cover",
        "theme-color": "#403014",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-title": NAME,
        "apple-mobile-web-app-status-bar-style": "black"
      }
    }),
    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/noscript.html",
      location: "head",
      priority: "low",
      inject: true
    }),
    new FaviconsWebpackPlugin({
      logo: LOGO,
      prefix: "images/",
      inject: true,
      cache: true,
      favicons: {
      icons: {
            // Platform Options:
            // - offset - offset in percentage
            // - background:
            //   * false - use default
            //   * true - force use default, e.g. set background for Android icons
            //   * color - set background for the specified icons
            //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
            //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
            //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
            //
            android: false,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            appleIcon: false,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            coast: false,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            windows: false,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            yandex: false                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
        }
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new WebpackPwaManifest({
      name: NAME,
      short_name: "View Examples",
      description: NAME,
      background_color: "#403014",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve(LOGO),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          ios: true
        }
      ]
    })
  ],
  // optimization
  optimization: {
    providedExports: true,
    usedExports: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don"t like @ symbols
            return `vendor.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
};
