#!/usr/bin/env node
/**
 * Fail CI when package.json "exports" drift from the committed snapshot or when
 * any resolved export target path is missing on disk (post-build layout).
 */
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SNAPSHOT = path.join(__dirname, 'package-exports.snapshot.json')

function collectTargets(entry) {
  if (typeof entry === 'string') return [entry]
  if (entry && typeof entry === 'object') {
    const out = []
    for (const k of ['import', 'require', 'types', 'default', 'node', 'browser']) {
      if (typeof entry[k] === 'string') out.push(entry[k])
    }
    return out
  }
  return []
}

function main() {
  const pkgPath = path.join(ROOT, 'package.json')
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))

  if (!pkg.exports || typeof pkg.exports !== 'object') {
    console.error('❌ package.json must define an "exports" map.')
    process.exit(1)
  }

  const keys = Object.keys(pkg.exports).sort()
  const expected = JSON.parse(readFileSync(SNAPSHOT, 'utf8'))

  if (keys.length !== expected.length || keys.some((k, i) => k !== expected[i])) {
    console.error('❌ package.json "exports" keys differ from scripts/package-exports.snapshot.json')
    console.error('   Current (sorted):', JSON.stringify(keys))
    console.error('   Expected:', JSON.stringify(expected))
    console.error('   Update the snapshot and document the change in arcade-ui/CHANGELOG.md')
    process.exit(1)
  }

  const typesField = pkg.types
  if (typeof typesField !== 'string') {
    console.error('❌ package.json "types" must be a string path.')
    process.exit(1)
  }
  const typesAbs = path.join(ROOT, typesField)
  if (!existsSync(typesAbs)) {
    console.error(`❌ Missing types file: ${typesField}`)
    process.exit(1)
  }

  const missing = []
  for (const [subpath, entry] of Object.entries(pkg.exports)) {
    for (const rel of collectTargets(entry)) {
      const abs = path.join(ROOT, rel)
      if (!existsSync(abs)) missing.push({ subpath, rel })
    }
  }

  if (missing.length) {
    console.error('❌ Missing files for export targets:')
    for (const { subpath, rel } of missing) console.error(`   ${subpath} → ${rel}`)
    process.exit(1)
  }

  console.log('✅ package exports snapshot and file paths are consistent.')
}

main()
