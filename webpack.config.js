const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = 'style-loader'

const config = {
	entry: ['./src/index.ts'],
	output: {
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	mode: {},
}

module.exports = () => {
	if (isProduction) {
		config.mode = 'production'
	} else {
		config.mode = 'development'
	}
	return config
}
