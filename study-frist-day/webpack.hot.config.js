/**
 * Created by ruiy on 7/24/15.
 */

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var args = require('yargs').argv;

var npm_dir = path.resolve(__dirname, 'node_modules');
var wangEditor_dir = path.resolve(__dirname, 'node_modules/wangeditor')
var static_dir = path.resolve(__dirname, 'static');

var antd_dir = path.resolve(__dirname, '../ant-design/lib');


var appChunk = ['setting', 'signup', 'withoutSigin', 'Wrapper']    // <-- 不会被异步的文件夹，即是会被加载在主模块中的

var dir = path.join(__dirname, 'app/views');

function addBundles(dir, appChunk) {
  var result = [];

  var items = fs.readdirSync(dir) || [];

  items.forEach(function (item) {

    var tempPath = path.join(dir, item);

    if (item.indexOf('.') < 0 && appChunk.indexOf(item) < 0) {
      var stats = fs.statSync(tempPath);

      if (stats.isDirectory()) {

        result.push(
          {
            test: new RegExp('app\/views\/' + item + '\/index\.(js|jsx)$'),
            loaders: ['bundle?lazy&name=' + item.toLowerCase(), 'babel'],
            exclude: [path.join(__dirname, 'node_modules')],
          }
        )
      }
    }
  });
  return result
}

var bundleLoaders = addBundles(dir, appChunk);


var config = {
  // devtool: 'inline-source-map',
  addVendor: function (type, name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
    if (type == 'js') {
      this.entry.vendors.push(name);
    }
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/main.hot.dev.jsx'
    ],
    vendors: []
  },
  resolve: {
    alias: {},
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    root: [path.join(__dirname, 'app'), path.join(__dirname, 'node_modules')]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/'
  },
  module: {
    noParse: [],
    //eslint
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [/app/],
      },
    ],
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loaders: ['react-hot', 'babel-loader'],
        include: [/app/],
        exclude: [npm_dir]
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=../static/img/[name].[ext]'},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
      {test: /\.gif$/, loader: "url-loader?mimetype=image/png"},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?minetype=application/font-woff",
        exclude: [wangEditor_dir]
      },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
      {
        // for wangEditor
        test: /icomoon\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=5000'
      }
    ].concat(bundleLoaders)
  },
  plugins: [
    // new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      "Dict": path.resolve(
        __dirname,
        "./app/config/dict.jsx"
      ),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __MASTER__: JSON.stringify(args.master || false),
    })
  ],
  eslint: {
    configFile: './.eslintrc.json',
    ignorePath: './.eslintignore'
  },
};

config.addVendor('js', 'zepto', static_dir + '/js/zepto/zepto.js');

module.exports = config;
