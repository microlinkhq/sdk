import { $ } from 'execa'
import test from 'ava'

const evalScript = code => $`node --eval ${code}`.then(({ stdout }) => stdout)
evalScript.esm = code => $`node --input-type module --eval ${code}`.then(({ stdout }) => stdout)

test('cjs', async t => {
  t.snapshot((await evalScript("console.log(require('./dist/microlink.cjs'))")))
})

test('esm', async t => {
  t.snapshot((await evalScript.esm('console.log(await import("./dist/microlink.mjs"))')))
})
