const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
 devtool: 'inline-source-map',
 devServer: {
   contentBase: path.join(__dirname, 'public') //The server runs the index.html file in this path
 },
 mode: 'development'
});
