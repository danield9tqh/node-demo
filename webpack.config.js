const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "src", "static", "js"),
        publicPath: "js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.css$/,
              exclude: /(node_modules)/,
              loader: "style-loader!css-loader"
            }
        ]
    }
};
