const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode : 'development',
	entry : Path.resolve(__dirname, 'src/index.js'),
	output : {
		path : Path.resolve(__dirname, 'dist'),
		filename : 'bundle.js'
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : Path.resolve(__dirname, 'public/index.html')
		})
	],
	module : {
		rules : [{
			test : /\.js$/,
			exclude : /node_modules/,
			loader : 'babel-loader',
			options : {
				presets : ['@babel/preset-env', '@babel/preset-react'],
				plugins : ['@babel/plugin-transform-runtime']
			}
		},{
			test : "/\.css$/",
			loader : 'css-loader'
		}]
	}
}