const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pages = ["index", "registration", "assessment"];
module.exports = {
  mode: 'development',
   entry: pages.reduce((config, page) =>{
    config[page] = `./src/${page}.js`;
    return config;
   }, {}),

  //   // bundle: path.resolve(__dirname, 'src/index.js')
  //   index:'./src/index.js',
  //   registration: './src/registration.js',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  optimization:{
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 2000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader',
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
   plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Career Quest | Career Guidance & Job orientation',
      filename: 'index.html',
      template: 'src/template.html',
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Career Quest | Career Guidance & Job orientation',
      filename: 'registration.html',
      template: 'src/registration.html',
      chunks: ["registration"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Career Quest | Career Guidance & Job orientation',
      filename: 'assessment.html',
      template: 'src/assessment.html',
      chunks: ["assessment"],
    }),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/navigation.html'),
      location: 'navigation',
      template_filename: ['index.html', 'registration.html', 'assessment.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/footer.html'),
      location: 'footer',
      template_filename: ['index.html', 'registration.html', 'assessment.html'],
    }),
   
  ]
}