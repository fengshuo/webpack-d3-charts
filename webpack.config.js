var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
	addVendor: function(name, path){
		this.resolve.alias[name] = path;
		this.module.noParse.push(path);
	},
	entry: "./app/js/main.js",
	output: {
		"path": "./build",
		"filename": "bundle.js"
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
		})
	]

};

config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js');
config.addVendor('d3', bower_dir + '/d3/d3.min.js');

module.exports = config;
