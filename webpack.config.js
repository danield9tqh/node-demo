const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "src", "static", "js"),
        publicPath: "js",
        filename: "bundle.js"
    }
};
