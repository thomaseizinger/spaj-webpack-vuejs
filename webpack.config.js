var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

exports.default = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: [
			"node_modules"
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}