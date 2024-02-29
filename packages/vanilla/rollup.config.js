import nodeResolve from '@rollup/plugin-node-resolve'
import { visualizer } from 'rollup-plugin-visualizer'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'

const plugins = ({ compress }) => [
  commonjs(),
  nodeResolve(),
  compress && terser({ mangle: false }),
  filesize(),
  visualizer({ template: 'treemap' }),
  replace({
    preventAssignment: true,
    values: {
      'styledComponents.styled': 'styledComponents',
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VERSION__: require('./package').version
    }
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

const builds = [
  build({
    format: 'umd',
    file: 'dist/microlink.js',
    name: 'microlink'
  }),
  build({
    format: 'umd',
    file: 'dist/microlink.min.js',
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
    file: 'dist/microlink.cjs',
    exports: 'named'
  }),
  build({
    format: 'cjs',
    file: 'dist/microlink.min.cjs',
    exports: 'named'
  })
]

export default builds
