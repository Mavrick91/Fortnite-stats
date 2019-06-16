// @flow

import { pick } from 'ramda'

type Match = {
  id: number,
  dateCollected: string,
  kills: number,
  matches: number,
  playlist: string,
  score: number,
  top1: number,
  top10: number,
  top12: number,
  top25: number,
  top3: number,
  top5: number,
  top6: number,
  trnRating: number
}

type Tops = {
  top3: number,
  top5: number,
  top10: number,
  top6: number,
  top12: number,
  top25: number
}

type InfoMatch = {
  isWin: boolean,
  title: string,
  infoRight: {
    mode: string,
    score: string,
    kills: number
  },
  top: boolean
}

const getPlaylist = (playlist: string): string => {
  switch (playlist) {
    case 'p2':
      return 'SOLO'
    case 'p10':
      return 'DUO'
    case 'p9':
      return 'SQUAD'
    default:
      return '...'
  }
}

export const getInfoRight = (match: Match) => ({
  mode: getPlaylist(match.playlist),
  score: `+${match.score}`,
  kills: match.kills
})

export const getFormattedTitle = (top: ?string, isWin: boolean): string => {
  if (isWin) return 'WINNER!'
  if (!top) return 'DEFEAT'

  const whatTop: ?string = top.split('top')[1]

  if (!whatTop) return 'DEFEAT'

  return `TOP ${whatTop}`
}

export const getInfoMatch = (match: Match): InfoMatch => {
  const tops: Tops = pick(
    ['top3', 'top5', 'top10', 'top6', 'top12', 'top25'],
    match
  )
  const top: ?string = Object.keys(tops).find(top => tops[top] > 0)
  const isWin: boolean = !!match.top1

  return {
    isWin,
    title: getFormattedTitle(top, isWin),
    infoRight: getInfoRight(match),
    top: !!top
  }
}
