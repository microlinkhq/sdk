import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import replace from 'rollup-plugin-replace'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled'
}

const prodPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    __VERSION__: require('./package.json').version
  }),
  terser({
    sourcemap: true
  })
]

const standaloneBaseConfig = {
  input: './src/index.js',
  output: {
    file: 'dist/microlink.js',
    format: 'umd',
    globals,
    name: 'microlink',
    sourcemap: true
  },
  external: Object.keys(globals),
  plugins: [nodeResolve(), commonjs(), filesize()]
}

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  output: {
    ...standaloneBaseConfig.output,
    file: 'dist/microlink.min.js'
  },
  plugins: standaloneBaseConfig.plugins.concat(prodPlugins)
}

export default [standaloneProdConfig]
