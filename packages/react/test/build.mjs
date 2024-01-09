import $ from 'tinyspawn'
import test from 'ava'

const evalScript = (code, flags = []) => $('node', ['--eval', code, ...flags]).then(({ stdout }) => stdout)
evalScript.esm = code => evalScript(code, ['--input-type', 'module'])

test('cjs', async t => {
  t.snapshot((await evalScript("console.log(require('./dist/microlink.cjs'))")))
})

test('esm', async t => {
  t.snapshot((await evalScript.esm('console.log(await import("./dist/microlink.mjs"))')))
})
