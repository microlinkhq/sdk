import nodeResolve from '@rollup/plugin-node-resolve'
import { visualizer } from 'rollup-plugin-visualizer'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import fs from 'fs'

const babelRc = JSON.parse(fs.readFileSync('./.babelrc'))

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  '@microlink/mql': 'mql'
}

const plugins = ({ compress }) => [
  nodeResolve(),
  babel({
    babelrc: false,
    ...babelRc,
    babelHelpers: 'runtime'
  }),
  commonjs(),
  compress && terser(),
  filesize(),
  visualizer({ template: 'treemap' }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

const build = ({ file, format, name, exports }) => {
  const compress = file.includes('.min.')
  return {
    input: './src/index.js',
    output: {
      sourcemap: compress,
      file,
      format,
      exports,
      name,
      globals
    },
    external: [/@babel\/runtime/].concat(Object.keys(globals)),
    plugins: plugins({ compress })
  }
}

const builds = [
  build({
    format: 'umd',
    file: 'dist/microlink.umd.js',
    name: 'microlink'
  }),
  build({
    format: 'umd',
    file: 'dist/microlink.umd.min.js',
    name: 'microlink'
  }),
  build({
    format: 'esm',
    file: 'dist/microlink.module.js',
    exports: 'named'
  }),
  build({
    format: 'esm',
    file: 'dist/microlink.module.min.js',
    exports: 'named'
  }),
  build({
    format: 'cjs',
    file: 'dist/microlink.js',
    exports: 'named'
  }),
  build({
    format: 'cjs',
    file: 'dist/microlink.min.js',
    exports: 'named'
  })
]

export default builds
