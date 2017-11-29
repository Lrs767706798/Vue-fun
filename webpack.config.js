var webpack = require("webpack");
var path = require("path")
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module:{
  	rules:[{
  		test: /\.txt$/,
  		use:'raw-loader'
  	},{
  		test: /\.(png|jpg|gif)$/,
  		use:'url-loader'
  	}
  	,{
  		test: /\.html$/,
  		use:'html-loader'
  	},{
  		test: /\.css$/,
  		use:['style-loader','css-loader']
  	},{
  		test: /\.vue$/,
  		use:['vue-loader']
  	},{
  		test: /\.scss$/,
  		use:['scss-loader']
  	},{
  		test: /\.js$/,
      use:['babel-loader']
  	}]
  },
  resolve:{
  	alias:{
  		'vue':'vue/dist/vue.js'
  	}
  }
};