import { Mock, describe, expect, it, vi } from 'vitest'

import { api } from '../api'
import { CALENDAR_RECT_CLASSNAME } from '../config'
import { fetchGithubCalendar } from '../fetchGithubCalendar'

vi.mock('../api')

describe('fetchGithubCalendar', () => {
  it('should return an array', async () => {
    // GIVEN
    const MOCK_API_RESPONSE = `
      <svg>
        <g>
          <rect
            class="${CALENDAR_RECT_CLASSNAME}"
            x="2"
            y="2"
            rx="2"
            ry="2"
            data-count="1"
            data-date="2021-01-01"
            data-level="1"
          />
        </g>
      </svg>
    `
    ;(api.get as Mock).mockResolvedValueOnce({ data: MOCK_API_RESPONSE })
    const VALID_USERNAME = 'arsamsarabi'

    // WHEN
    const response = await fetchGithubCalendar(VALID_USERNAME)

    // THEN
    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          x: 2,
          y: 2,
          rx: 2,
          ry: 2,
          count: 1,
          date: '2021-01-01',
          level: 1
        })
      ])
    )
  })

  it('should return an empty array if fetching a Github prifile fails', async () => {
    // GIVEN

    const INVALID_USERNAME = 'some invalid username'

    // WHEN
    const response = await fetchGithubCalendar(INVALID_USERNAME)

    // THEN
    expect(response).toEqual([])
  })
})
