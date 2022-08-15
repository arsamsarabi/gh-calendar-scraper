import { describe, expect, it } from 'vitest'

import { CALENDAR_RECT_CLASSNAME } from '../config'
import { getDayRectsAttribs } from '../getDayRectsAttribs'

describe('getDayRectsAttribs', () => {
  it('should return the expected result', () => {
    // GIVEN
    const MOCK_GH_PROFILE = `
      <svg class="js-calendar-graph-svg">
        <rect class="${CALENDAR_RECT_CLASSNAME}" />
        <rect class="${CALENDAR_RECT_CLASSNAME}" />
        <rect class="${CALENDAR_RECT_CLASSNAME}" />
      </svg>
    `

    // WHEN
    const response = getDayRectsAttribs(MOCK_GH_PROFILE)

    // THEN
    expect(response).toHaveLength(3)
  })

  it('should return an empty array', () => {
    // GIVEN
    const MOCK_GH_PROFILE = `
      <svg class="js-calendar-graph-svg" />
    `

    // WHEN
    const response = getDayRectsAttribs(MOCK_GH_PROFILE)

    // THEN
    expect(response).toHaveLength(0)
  })
})
