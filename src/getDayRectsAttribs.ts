import { load } from 'cheerio'

import { CALENDAR_RECT_CLASSNAME } from './config'
import { AttributesObject } from './types'

type GetDayRectsAttribs = (html: string) => Array<AttributesObject>
export const getDayRectsAttribs: GetDayRectsAttribs = (ghProfile) => {
  const $ = load(ghProfile)

  return $(`rect.${CALENDAR_RECT_CLASSNAME}`)
    .toArray()
    .map((el) => el.attribs)
}
