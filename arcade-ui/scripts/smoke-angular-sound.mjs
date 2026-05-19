#!/usr/bin/env node
/**
 * Template smoke: `ArcadeSoundDirective` inputs compile under strict Angular templates (ngc).
 */
import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, readdirSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const FIXTURE = path.join(ROOT, 'angular-sound-smoke')

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
  const dir = mkdtempSync(path.join(tmpdir(), 'arcade-ui-ng-sound-'))

  try {
    writeFileSync(
      path.join(dir, 'package.json'),
      JSON.stringify(
        {
          name: 'arcade-ui-angular-sound-smoke',
          private: true,
          type: 'module',
          dependencies: {
            '@angular/common': '^19.2.22',
            '@angular/compiler': '^19.2.22',
            '@angular/core': '^19.2.22',
            '@davide03memoli/arcade-ui': `file:${tarballAbs}`,
            rxjs: '^7.8.2',
            tslib: '^2.8.1',
          },
          devDependencies: {
            '@angular/compiler-cli': '^19.2.22',
            typescript: '5.8.3',
          },
        },
        null,
        2,
      ),
    )

    cpSync(FIXTURE, dir, { recursive: true })

    execFileSync('npm', ['install'], { cwd: dir, stdio: 'inherit' })

    const ngc = path.join(dir, 'node_modules', '@angular', 'compiler-cli', 'bundles', 'src', 'bin', 'ngc.js')
    execFileSync(
      process.execPath,
      [ngc, '-p', path.join(dir, 'tsconfig.ngc.json')],
      { cwd: dir, stdio: 'inherit' },
    )

    console.log('✅ Angular declarative sound template smoke (ngc) passed.')
  } finally {
    rmSync(dir, { recursive: true, force: true })
    unlinkSync(tarballAbs)
  }
}

main()
