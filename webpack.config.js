 module.exports = {
     entry: './src/paint.js',
     output: {
         path: './bin',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel-loader'
         }]
     }
 }

