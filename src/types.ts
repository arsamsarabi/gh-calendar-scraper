export type AttributesObject = Record<string, string>

export type DayStats = {
  x: number
  y: number
  rx: number
  ry: number
  count: number
  date: string
  level: number
}

export type GithubCalendar = Array<DayStats>
