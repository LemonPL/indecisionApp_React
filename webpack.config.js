// entry point -> output
// webpack here is used to handle various types of files through babel and other tools

const path = require('path');

// exposing an object to another file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            // below we are looking for .js files that end with .js
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            // below 's' is optional
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // below is used for debugging in dev console
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader