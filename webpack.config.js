const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const repoName = 'mineluck'

module.exports = (env, argv) => {
	const isProd = argv.mode === 'production'
	const publicPath = isProd ? `/${repoName}/` : '/'

	return {
	mode: isProd ? 'production' : 'development',
	entry: './src/index.tsx',
	devtool: isProd ? false : 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: false,
								localIdentName: '[name]__[local]__[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath,
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	plugins: [
		new webpack.DefinePlugin({
			__PUBLIC_PATH__: JSON.stringify(publicPath),
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			templateParameters: {
				faviconHref: `${publicPath}assets/favicon.svg`,
			},
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/assets', to: 'assets' }],
		}),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000,
		hot: true,
		open: true,
		historyApiFallback: true,
	},
	}
}
