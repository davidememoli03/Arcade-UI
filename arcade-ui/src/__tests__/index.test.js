// src/__tests__/index.test.js
import { describe, it, expect } from 'vitest'
import { version } from '../index.js'
import pkg from '../../package.json'

describe('arcade-ui — exports', () => {
  it('version is a string', () => {
    expect(typeof version).toBe('string')
  })

  it('version matches package.json', () => {
    expect(version).toBe(pkg.version)
  })

  it('version is not empty', () => {
    expect(version.length).toBeGreaterThan(0)
  })

  it('version follows semver format (x.y.z)', () => {
    expect(version).toMatch(/^\d+\.\d+\.\d+/)
  })
})
