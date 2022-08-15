import { api } from './api'

type FetchGhCalendar = (username: string) => Promise<string | null>
export const fetchGithubProfile: FetchGhCalendar = async (username) => {
  try {
    const { data } = await api.get(username)
    return data
  } catch (error) {
    return null
  }
}
