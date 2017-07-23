var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'server.js'),
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'app.bundle.js',
    library: '',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty',
    net: 'empty'
  }
};
