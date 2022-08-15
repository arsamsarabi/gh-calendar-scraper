import { Mock, describe, expect, it, vi } from 'vitest'

import { api } from '../api'
import { fetchGithubProfile } from '../fetchGithubProfile'

vi.mock('../api')

describe('fetchGithubProfile', () => {
  it('should return a string', async () => {
    // GIVEN
    ;(api.get as Mock).mockResolvedValueOnce({ data: 'some html' })

    // WHEN
    const response = await fetchGithubProfile('some username')

    // THEN
    expect(response).toBe('some html')
  })

  it('should return null', async () => {
    // GIVEN
    ;(api.get as Mock).mockRejectedValueOnce(new Error('some error'))

    // WHEN
    const response = await fetchGithubProfile('some username')

    // THEN
    expect(response).toBeNull()
  })
})
