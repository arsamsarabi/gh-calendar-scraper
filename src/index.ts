import axios from 'axios'
import { load } from 'cheerio'

export type GhCalendarResponse = Array<
  | {
      x: number
      y: number
      rx: number
      ry: number
      count: number
      date: string
      level: number
    }
  | undefined
>

type FetchGhCalendar = (username: string) => Promise<GhCalendarResponse>
export const fetchGhCalendar: FetchGhCalendar = async (username) => {
  const { data } = await axios.get(`https://github.com/${username}`)
  const $ = load(data)
  const rects = $('rect.ContributionCalendar-day')
  const result = Object.keys(rects).map((key) => {
    const attribs = rects[Number(key)]?.attribs
    if (!attribs) return

    return {
      x: Number(attribs.x),
      y: Number(attribs.y),
      rx: Number(attribs.rx),
      ry: Number(attribs.ry),
      count: Number(attribs['data-count']),
      date: String(attribs['data-date']),
      level: Number(attribs['data-level'])
    }
  })

  return result.filter((item) => item !== undefined)
}
