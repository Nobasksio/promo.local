const path = require('path');

module.exports = {
    mode: 'development',
    entry: {app:'./src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
       },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                use: [
               'file-loader'
             ]
       },
             {
                 test: /\.scss$/,
                 use: [
                     "style-loader", // creates style nodes from JS strings
                     "css-loader", // translates CSS into CommonJS
                     "sass-loader" // compiles Sass to CSS, using Node Sass by default
                 ]
             }

     ]
   }
};