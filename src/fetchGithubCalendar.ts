import { buildResponseObject } from './buildResponseObject'
import { fetchGithubProfile } from './fetchGithubProfile'
import { getDayRectsAttribs } from './getDayRectsAttribs'
import type { AttributesObject, GithubCalendar } from './types'

type FetchGithubCalendar = (username: string) => Promise<GithubCalendar>
export const fetchGithubCalendar: FetchGithubCalendar = async (username) => {
  const ghProfile = await fetchGithubProfile(username)

  if (!ghProfile) {
    return []
  }

  const attributes: Array<AttributesObject> = getDayRectsAttribs(ghProfile)
  const response: GithubCalendar = buildResponseObject(attributes)

  return response
}
