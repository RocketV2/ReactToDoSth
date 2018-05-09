
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const ROOT_PATH = path.resolve(__dirname); // 项目跟路径
const APP_PATH = path.resolve(ROOT_PATH, 'app'); // 项目开发目录src
const APP_FILE = path.resolve(APP_PATH, 'app.js'); // 项目入口的index.js
const DIST_PATH = path.resolve(ROOT_PATH, 'build'); // 项目打包输出路径

module.exports = {
	entry: APP_FILE,

	output:{
		filename: 'bundle.js',
		path: DIST_PATH,
	},

	mode: 'development',

	resolve:{
		extensions:['.js','.json','.jsx','.css']
	},


	module:{
		rules:[
			{
				test:/(\.js|\.jsx)$/,
				use:["babel-loader?presets[]=env,presets[]=react"],
				exclude:/node_modules/
			},{
				test:/(\.css)$/,
				use:["style-loader","css-loader"],
				exclude:/node_modules/
			}
		]
	},

	plugins:[
            
		new HtmlWebpackPlugin({
			template: __dirname + "/app/app.html"// 入口文件HTML
		}),


	]
}