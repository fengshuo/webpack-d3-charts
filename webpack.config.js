var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
	addVendor: function(name, path){
		this.resolve.alias[name] = path;
		this.module.noParse.push(path);
	},
	entry: {
		page1: ["./app/js/main.js"],
		page2: ["./app/js/main2.js", "topojson"],
		vendors: ["d3","jquery"]
	},
	output: {
		"path": "./build",
		"filename": "[name].bundle.js"
	},
	module: {
		noParse: [],
		loaders: [
			{test: /\.less$/, loader: 'style!css!less'}
		]
	},
	resolve: {
		alias: {}
	},
	plugins: [
		// This plugin makes a module available as variable in every module
		new webpack.ProvidePlugin({
			d3: "d3",
			$: "jquery"
		}),
		// CommonsChunkPlugin will take the vendors chunk and create a commonly used js file
		new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
	]

};

config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js');
config.addVendor('d3', bower_dir + '/d3/d3.min.js');
config.addVendor('topojson', bower_dir + '/topojson/topojson.js');

module.exports = config;
