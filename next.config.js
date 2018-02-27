var nodeExternals = require('webpack-node-externals');

module.exports = {
  webpack (config) {
    config.target = 'node', // in order to ignore built-in modules like path, fs, etc.
    config.externals =  [nodeExternals()] // in order to ignore all modules in node_modules folder
    return config
  }
}
