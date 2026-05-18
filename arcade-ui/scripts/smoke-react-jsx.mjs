#!/usr/bin/env node
/**
 * Strict JSX smoke: packed tarball + React 18 & 19 (+ matching @types), `jsx: react-jsx`,
 * plus a negative fixture proving Arcade JSX augmentation narrows literals.
 */
import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, readdirSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const CONSUMER_SRC = path.join(ROOT, 'react-jsx-consumer')

const REACT_MATRIX = [
  { label: 'React 18', react: '^18.3.1', types: '^18.3.12' },
  { label: 'React 19', react: '^19.0.0', types: '^19.0.0' },
]

function rmOldTarballs() {
  for (const name of readdirSync(ROOT)) {
    if (name.startsWith('davide03memoli-arcade-ui-') && name.endsWith('.tgz')) {
      unlinkSync(path.join(ROOT, name))
    }
  }
}

function runSuite(label, tarballAbs, reactRange, typesRange) {
  const dir = mkdtempSync(path.join(tmpdir(), 'arcade-ui-react-jsx-'))

  try {
    writeFileSync(
      path.join(dir, 'package.json'),
      JSON.stringify(
        {
          name: 'arcade-ui-react-jsx-smoke',
          private: true,
          type: 'module',
          dependencies: {
            '@davide03memoli/arcade-ui': `file:${tarballAbs}`,
            react: reactRange,
          },
          devDependencies: {
            '@types/react': typesRange,
            typescript: '5.8.3',
          },
        },
        null,
        2,
      ),
    )

    cpSync(path.join(CONSUMER_SRC, 'tsconfig.json'), path.join(dir, 'tsconfig.json'))
    cpSync(path.join(CONSUMER_SRC, 'tsconfig.negative.json'), path.join(dir, 'tsconfig.negative.json'))
    cpSync(path.join(CONSUMER_SRC, 'src'), path.join(dir, 'src'), { recursive: true })

    execFileSync('npm', ['install'], { cwd: dir, stdio: 'inherit' })

    const tsc = path.join(dir, 'node_modules', 'typescript', 'bin', 'tsc')

    execFileSync(tsc, ['--project', path.join(dir, 'tsconfig.json'), '--noEmit'], {
      cwd: dir,
      stdio: 'inherit',
    })

    let negativeOk = false
    try {
      execFileSync(tsc, ['--project', path.join(dir, 'tsconfig.negative.json'), '--noEmit'], {
        cwd: dir,
        stdio: 'pipe',
      })
    } catch (err) {
      const code =
        err && typeof err === 'object' && 'status' in err && typeof err.status === 'number'
          ? err.status
          : 1
      negativeOk = code !== 0
    }

    if (!negativeOk) {
      console.error(
        `❌ [${label}] Expected negative JSX fixture to fail (invalid data-arc-glitch-intensity).`,
      )
      process.exit(1)
    }

    console.log(`✅ [${label}] React JSX smoke passed.`)
  } finally {
    rmSync(dir, { recursive: true, force: true })
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

  try {
    for (const row of REACT_MATRIX) {
      runSuite(row.label, tarballAbs, row.react, row.types)
    }
    console.log('✅ React JSX smoke (React 18 + 19, react-jsx + augmentation regression) passed.')
  } finally {
    unlinkSync(tarballAbs)
  }
}

main()
