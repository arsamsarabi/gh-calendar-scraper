import { AttributesObject, GithubCalendar } from './types'

type BuildResponseObject = (attributes: Array<AttributesObject>) => GithubCalendar
export const buildResponseObject: BuildResponseObject = (attributes) => {
  const response: GithubCalendar = []

  attributes.forEach((attribs) => {
    response.push({
      x: Number(attribs.x),
      y: Number(attribs.y),
      rx: Number(attribs.rx),
      ry: Number(attribs.ry),
      count: Number(attribs['data-count']),
      date: String(attribs['data-date']),
      level: Number(attribs['data-level'])
    })
  })

  return response
}
