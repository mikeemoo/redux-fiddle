const webpack = require("webpack");
const path = require("path");

module.exports = {

	entry: path.join(__dirname, "client", "src", "index.js"),

	output: {
		path: path.join(__dirname, "client", "build"),
		filename: "bundle.js"
	},

	devtool:  process.env.NODE_ENV === "production" ? "" : "source-map",

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, "client", "src"),
				loader: "babel-loader"
			},
			{
				test: /\.json$/,
				loader: "json"
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
		})
	],

	stats: { colors: true }
};
