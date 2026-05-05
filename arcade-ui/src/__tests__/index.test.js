// src/__tests__/index.test.js
import { describe, it, expect } from 'vitest'
import { version } from '../index.js'

describe('arcade-ui', () => {
  it('exports a version string', () => {
    expect(typeof version).toBe('string')
  })
})
