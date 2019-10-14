import nodeResolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

const plugins = [
  commonjs(),
  nodeResolve(),
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
    file: 'dist/microlink.min.js',
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
