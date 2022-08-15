import { describe, expect, it } from 'vitest'

import { buildResponseObject } from '../buildResponseObject'

describe('buildResponseObject', () => {
  it('should return the expected result', () => {
    // GIVEN
    const MOCK_ATTRIBUTES = [
      {
        x: '12',
        y: '12',
        rx: '12',
        ry: '12',
        'data-count': '12',
        'data-date': '12-12-12',
        'data-level': '12'
      }
    ]

    // WHEN
    const response = buildResponseObject(MOCK_ATTRIBUTES)

    // THEN
    expect(response).toHaveLength(1)
    expect(response).toEqual([
      {
        x: 12,
        y: 12,
        rx: 12,
        ry: 12,
        count: 12,
        date: '12-12-12',
        level: 12
      }
    ])
  })
})
