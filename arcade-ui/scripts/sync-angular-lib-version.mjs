#!/usr/bin/env node
/** Align `angular/package.json` version with the root package before ng-packagr runs. */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))
const angPath = path.join(root, 'angular', 'package.json')
const ang = JSON.parse(readFileSync(angPath, 'utf8'))
ang.version = pkg.version
writeFileSync(angPath, `${JSON.stringify(ang, null, 2)}\n`)
