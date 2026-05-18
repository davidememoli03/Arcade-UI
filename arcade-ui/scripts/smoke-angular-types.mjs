#!/usr/bin/env node
/**
 * Type-only smoke: packaged `@davide03memoli/arcade-ui/angular` resolves through root exports.
 */
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readdirSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

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
  const dir = mkdtempSync(path.join(tmpdir(), 'arcade-ui-ng-types-'))

  try {
    writeFileSync(
      path.join(dir, 'package.json'),
      JSON.stringify(
        {
          name: 'arcade-ui-angular-types-smoke',
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

    writeFileSync(
      path.join(dir, 'tsconfig.json'),
      JSON.stringify(
        {
          compilerOptions: {
            strict: true,
            module: 'NodeNext',
            moduleResolution: 'NodeNext',
            noEmit: true,
            skipLibCheck: true,
            verbatimModuleSyntax: true,
            lib: ['ES2022'],
            types: [],
          },
          files: ['smoke.ts'],
        },
        null,
        2,
      ),
    )

    writeFileSync(
      path.join(dir, 'smoke.ts'),
      [
        "import type {",
        '  ArcadeAudioService,',
        '  ArcadeGlitchDirective,',
        '  ArcadeThemeDirective,',
        "} from '@davide03memoli/arcade-ui/angular'",
        '',
        'export type ArcadeAngularSmokeBundle = [',
        '  ArcadeAudioService,',
        '  ArcadeGlitchDirective,',
        '  ArcadeThemeDirective,',
        ']',
        '',
      ].join('\n'),
    )

    execFileSync('npm', ['install'], { cwd: dir, stdio: 'inherit' })

    execFileSync(
      path.join(dir, 'node_modules', 'typescript', 'bin', 'tsc'),
      ['--project', path.join(dir, 'tsconfig.json')],
      { cwd: dir, stdio: 'inherit' },
    )

    console.log('✅ Angular secondary entry type-resolution smoke passed.')
  } finally {
    rmSync(dir, { recursive: true, force: true })
    unlinkSync(tarballAbs)
  }
}

main()
