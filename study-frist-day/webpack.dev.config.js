var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var args = require('yargs').argv;

var npm_dir = path.resolve(__dirname, 'node_modules');
var wangEditor_dir = path.resolve(__dirname, 'node_modules/wangeditor')
var static_dir = path.resolve(__dirname, 'static');

var antd_dir = path.resolve(__dirname, '../ant-design/lib');

var development_copy = [
  {from: 'static/productInfo', to: 'static/productInfo'},
  {from: 'static/protocol', to: 'static/protocol'},
  {from: 'static/report', to: 'static/report'},
  {from: 'static/roomInfo', to: 'static/roomInfo'},
  // {from: 'static/docs', to: 'static/docs'},
  {from: 'static/js', to: 'static/js'},
  {from: 'static/css', to: 'static/css'},
  {from: 'static/foundation', to: 'static/foundation'},

  {from: 'static/img', to: 'static/img'},

  {from: 'release_notes.html', to: 'release_notes.html'},
];


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
  addVendor: function (type, name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
    if (type == 'js') {
      this.entry.vendors.push(name);
    }
  },
  entry: {
    app: [
      './app/main.dev.jsx'
    ],
    vendors: ['react', 'react-dom', 'react-router']
  },
  resolve: {
    alias: {
    },
    root: [path.join(__dirname, 'app'), path.join(__dirname, 'node_modules')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  output: {
    filename: 'assets/[name].bundle.js',
    chunkFilename: "assets/[name].chunk.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        include: /app/,
        exclude: [npm_dir]
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=static/img/[name].[ext]'},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
      {test: /\.gif$/, loader: "url-loader?mimetype=image/png&name=static/img/[name].[ext]"},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?minetype=application/font-woff&name=assets/fonts/[name].[ext]",
        exclude: [wangEditor_dir]
      },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=assets/fonts/[name].[ext]"},
      {
        // for wangEditor
        test: /icomoon\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=5000&name=assets/fonts/[name].[ext]'
      }
    ].concat(bundleLoaders)
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      "Dict": path.resolve(
        __dirname,
        "./app/config/dict.jsx"
      ),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),    //生成的html存放路径，相对于 path
      template: 'template.html',    //html模板路径
      inject: true,    //允许插件修改哪些内容，包括head与body
      hash: true,    //为静态资源生成hash值
      chunks: ['vendors', 'app'], //需要引入的chunk，不配置就会引入所有页面的资源.名字来源于你的入口文件,
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin(development_copy),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      __MASTER__: JSON.stringify(args.master || true),
    })
  ]
};

config.addVendor('js', 'zepto', static_dir + '/js/zepto/zepto.min.js');

module.exports = config;
