'use strict'

const config = require('./webpack.config.prod')

const path = require('path')
const fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

config.output.path = resolveApp('amd')
config.output.libraryTarget = 'amd'

module.exports = config
