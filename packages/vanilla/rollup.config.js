import nodeResolve from '@rollup/plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

const plugins = ({ compress }) => [
  commonjs(),
  nodeResolve(),
  compress && terser(),
  filesize(),
  visualizer({ template: 'treemap' }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  '@microlink/mql': 'mql'
}

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
    external: Object.keys(globals),
    plugins: plugins({ compress })
  }
}

export default [
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
    file: 'dist/microlink.mjs',
    exports: 'named'
  }),
  build({
    format: 'esm',
    file: 'dist/microlink.min.mjs',
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
