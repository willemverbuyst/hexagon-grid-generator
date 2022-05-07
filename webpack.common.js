const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: {
		main: './ts/main.ts',
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './html',
				},
			],
		}),
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name]-bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				options: {
					configFile: path.resolve(__dirname, 'tsconfig.base.json'),
				},
				exclude: ['/node_modules/'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}
