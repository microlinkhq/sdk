import nodeResolve from '@rollup/plugin-node-resolve'
import { visualizer } from 'rollup-plugin-visualizer'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'

const isProduction = process.env.NODE_ENV === 'production'

const plugins = ({ compress }) =>
  [
    commonjs(),
    nodeResolve(),
    compress && terser(),
    filesize(),
    visualizer({ template: 'treemap' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    !isProduction &&
      copy({
        targets: [{ src: 'dist', dest: 'docs' }]
      })
  ].filter(Boolean)

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
    name: 'microlinkHover'
  })
]

if (isProduction) {
  builds.concat([
    build({
      format: 'umd',
      file: 'dist/microlink.js',
      name: 'microlinkHover'
    }),
    build({
      format: 'umd',
      file: 'dist/microlink.min.js',
      name: 'microlinkHover'
    }),
    build({
      format: 'esm',
      file: 'dist/microlink.module.js',
      exports: 'named'
    }),
    build({
      format: 'esm',
      file: 'dist/microlink.min.module.js',
      exports: 'named'
    }),
    build({
      format: 'cjs',
      file: 'dist/microlink.cjs.js',
      exports: 'named'
    }),
    build({
      format: 'cjs',
      file: 'dist/microlink.cjs.min.js',
      exports: 'named'
    })
  ])
}

export default builds
