const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function generateConfig() {
	const babelLoader = {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
			plugins: [],
		},
	};

	return {
		mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
		target: 'node',
		entry: {
			'layout-buefy-base': './src/buefy-base/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			libraryTarget: 'commonjs2',
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
			alias: {
				'~': path.resolve(__dirname, 'src'),
			},
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: babelLoader,
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						optimizeSSR: false,
					},
				},
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [
						babelLoader,
						{
							loader: 'ts-loader',
							options: {
								appendTsSuffixTo: [/\.vue$/],
							},
						},
					],
				},
				{
					test: /\.pug?$/,
					use: 'pug-plain-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.scss$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				},
			],
		},
		plugins: [
			new VueLoaderPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
		],
		externals: {},
	};
}

module.exports = generateConfig();
