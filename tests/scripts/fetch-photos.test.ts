import { describe, it, expect } from 'vitest'
import { stripTags } from '../../scripts/fetch-photos'

describe('stripTags()', () => {
  it('removes a well-formed tag', () => {
    expect(stripTags('<a href="x">Jane Doe</a>')).toBe('Jane Doe')
  })

  it('strips nested/malformed tags', () => {
    expect(stripTags('<<a>script>')).toBe('script>')
  })
})
