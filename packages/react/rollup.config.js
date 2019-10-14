import nodeResolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

import babel from 'rollup-plugin-babel'
import fs from 'fs'

const babelRc = JSON.parse(fs.readFileSync('./.babelrc'))

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  '@microlink/mql': 'mql'
}

const plugins = [
  nodeResolve(),
  babel({
    babelrc: false,
    externalHelpers: false,
    ...babelRc
  }),
  commonjs(),
  filesize(),
  visualizer({ template: 'treemap' }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

const build = ({ file, format, name, exports }) => ({
  input: './src/index.js',
  output: {
    file,
    format,
    exports,
    name,
    globals
  },
  external: Object.keys(globals),
  plugins
})

export default [
  build({
    format: 'umd',
    file: 'dist/microlink.js',
    name: 'microlink',
    exports: 'named'
  }),
  build({
    format: 'esm',
    file: 'dist/microlink.m.js',
    exports: 'named'
  }),
  build({
    format: 'cjs',
    file: 'dist/microlink.cjs.js',
    exports: 'named'
  })
]
