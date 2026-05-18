#!/usr/bin/env node
/**
 * ng-packagr emits declaration-relative imports without `.js` extensions (`./public-api`).
 * TypeScript `moduleResolution: "NodeNext"` resolves those like Node ESM and fails to load
 * `public-api.d.ts`, which breaks installs from npm tarball (symlinked `file:.` dev installs mask this).
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist/angular')

function patchSource(s) {
  return s
    .replace(/from '\.\/([^']+)'/g, (_, spec) =>
      spec.endsWith('.js') ? `from './${spec}'` : `from './${spec}.js'`,
    )
    .replace(/from "\.\/([^"]+)"/g, (_, spec) =>
      spec.endsWith('.js') ? `from "./${spec}"` : `from "./${spec}.js"`,
    )
}

for (const name of readdirSync(dir)) {
  if (!name.endsWith('.d.ts')) continue
  const fp = path.join(dir, name)
  writeFileSync(fp, patchSource(readFileSync(fp, 'utf8')))
}
