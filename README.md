# gh-calendar-scraper

Scrapes a users GitHub contributions calendar
![Github calendar example](/assets/calendar-example.png)

## Install

Install the package in your project.

```sh
$ yarn add gh-calendar-scraper
```

## Usage

Import the "fetchGithubCalendar" function and pass in a GitHub username.

```ts
import { GithubCalendar, fetchGithubCalendar } from 'gh-calendar-scraper'

const calendar: GithubCalendar = await fetchGithubCalendar('username')
```

## Types

Thit package also exports the following Typescript types:

```ts
type DayStats = {
  x: number
  y: number
  rx: number
  ry: number
  count: number
  date: string
  level: number
}

type GithubCalendar = Array<DayStats>
```
