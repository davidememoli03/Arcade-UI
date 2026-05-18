#!/usr/bin/env node
/**
 * Pack the library like npm publish, install the tarball into a temp project,
 * and run tsc --strict --noEmit against real NodeNext resolution (Angular/React-style strictness).
 */
import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, readdirSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const CONSUMER_SRC = path.join(ROOT, 'dts-consumer')

function rmOldTarballs() {
  for (const name of readdirSync(ROOT)) {
    if (name.startsWith('davide03memoli-arcade-ui-') && name.endsWith('.tgz')) {
      unlinkSync(path.join(ROOT, name))
    }
  }
}

function main() {
  rmOldTarballs()
  execFileSync('npm', ['pack', '--pack-destination', ROOT], {
    cwd: ROOT,
    stdio: 'inherit',
  })

  const packed = readdirSync(ROOT).filter(
    (n) => n.startsWith('davide03memoli-arcade-ui-') && n.endsWith('.tgz'),
  )
  if (packed.length !== 1) {
    console.error('❌ Expected exactly one npm pack tarball, got:', packed)
    process.exit(1)
  }

  const tarballAbs = path.join(ROOT, packed[0])
  const dir = mkdtempSync(path.join(tmpdir(), 'arcade-ui-dts-'))

  try {
    writeFileSync(
      path.join(dir, 'package.json'),
      JSON.stringify(
        {
          name: 'arcade-ui-dts-consumer-smoke',
          private: true,
          type: 'module',
          dependencies: {
            '@davide03memoli/arcade-ui': `file:${tarballAbs}`,
          },
          devDependencies: {
            typescript: '5.8.3',
          },
        },
        null,
        2,
      ),
    )

    cpSync(path.join(CONSUMER_SRC, 'tsconfig.json'), path.join(dir, 'tsconfig.json'))
    cpSync(path.join(CONSUMER_SRC, 'src'), path.join(dir, 'src'), { recursive: true })

    execFileSync('npm', ['install'], { cwd: dir, stdio: 'inherit' })
    execFileSync(
      path.join(dir, 'node_modules', 'typescript', 'bin', 'tsc'),
      ['--project', path.join(dir, 'tsconfig.json'), '--noEmit'],
      { cwd: dir, stdio: 'inherit' },
    )

    console.log('✅ DTS consumer smoke (packed tarball + strict tsc) passed.')
  } finally {
    rmSync(dir, { recursive: true, force: true })
    unlinkSync(tarballAbs)
  }
}

main()
