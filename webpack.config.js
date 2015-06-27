module.exports = {
	entry: "./app/js/main.js",
	output: {
		"path": "./build",
		"filename": "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.less$/, loader: 'style!css!less'}
		]
	}
};
