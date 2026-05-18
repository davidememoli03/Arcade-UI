#!/usr/bin/env node
/**
 * ng-packagr emits `/// <amd-module name="@davide03memoli/arcade-ui-angular" />`, which makes
 * plain `tsc` consumers resolve `@davide03memoli/arcade-ui/angular` as an unrelated module id.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const index = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist/angular/index.d.ts')
let src = readFileSync(index, 'utf8')
src = src.replace(/^\/\/\/ <amd-module name="[^"]+" \/>\r?\n/m, '')
writeFileSync(index, src)
