// const path = require('path');

module.exports = {
	entry: './components/app/app.js',
	mode: 'none',
	output: {
		//path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},
			// {
			// 	test: /\.m?js$/,
			// 	exclude: /(node_modules)/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/preset-env'],
			// 			plugins: ['@babel/plugin-proposal-object-rest-spread']
			// 		}
			// 	}
			// },
		]
	},
};
