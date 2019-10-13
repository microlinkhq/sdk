import nodeResolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import fs from 'fs'

const babelRc = JSON.parse(fs.readFileSync('./.babelrc'))

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true
}

const esm = {
  format: 'esm',
  sourcemap: true
}

const getCJS = override => ({ ...cjs, ...override })
const getESM = override => ({ ...esm, ...override })

const commonPlugins = [
  nodeResolve(),
  babel({
    babelrc: false,
    externalHelpers: false,
    ...babelRc
  }),
  commonjs(),
  filesize()
]

const configBase = {
  input: './src/index.js',
  // \0 is rollup convention for generated in memory modules
  external: id =>
    !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
  plugins: commonPlugins
}

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled'
}

const standaloneBaseConfig = {
  ...configBase,
  input: './src/index.js',
  output: {
    file: 'dist/microlink.js',
    format: 'umd',
    exports: 'named',
    globals,
    name: 'microlink',
    sourcemap: true
  },
  external: Object.keys(globals)
}

const prodPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  terser({
    sourcemap: true
  }),
  visualizer({ template: 'treemap' })
]

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  output: {
    ...standaloneBaseConfig.output,
    file: 'dist/microlink.min.js'
  },
  plugins: standaloneBaseConfig.plugins.concat(prodPlugins)
}

const serverConfig = {
  ...configBase,
  output: [
    getESM({ file: 'dist/microlink.m.js' }),
    getCJS({ file: 'dist/microlink.cjs.js' })
  ]
}

export default [standaloneProdConfig, serverConfig]
