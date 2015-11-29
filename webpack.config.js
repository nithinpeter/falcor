var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: "./app/index.js",
	output: {
		path: path.resolve(__dirname+"/public"),
		filename: "bundle.js"
	},
	plugins: [
		new ExtractTextPlugin('style.css')	
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: "./node_modules",
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: "./node_modules",
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: "./node_modules",
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			}
		]
	},
	
	resolve: {
		extensions: ['', '.js', '.es6']
	}
}