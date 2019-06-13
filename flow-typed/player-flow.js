declare type TopWithPercent = {
  label: string,
  field: string,
  category: string,
  valueInt: number,
  value: string,
  rank: number,
  percentile: number,
  displayValue: string
}

declare type TopWithoutPercent = {
  label: string,
  field: string,
  category: string,
  valueInt: number,
  value: string,
  rank: number,
  displayValue: string
}

declare type StatsDetail = {
  label: string,
  field: string,
  category: string,
  valueDec: number,
  value: string,
  rank: number,
  percentile: number,
  displayValue: string
}

declare type ModeStat = {
  trnRating: TopWithPercent,
  score: TopWithPercent,
  top1: TopWithPercent,
  top3: TopWithoutPercent,
  top5: TopWithoutPercent,
  top6: TopWithoutPercent,
  top10: TopWithPercent,
  top12: TopWithoutPercent,
  top25: TopWithPercent,
  kd: StatsDetail,
  winRatio: StatsDetail,
  matches: TopWithPercent,
  kills: TopWithPercent,
  kpg: StatsDetail,
  scorePerMatch: StatsDetail
}

declare type StatsType = {
  p2: ModeStat,
  p10: ModeStat,
  p9: ModeStat,
  curr_p2: ModeStat,
  curr_p10: ModeStat,
  curr_p9: ModeStat
}

declare type RecentMatchesType = $ReadOnlyArray<{
  id: number,
  accountId: string,
  playlist: string,
  kills: number,
  minutesPlayed: number,
  top1: number,
  top5: number,
  top6: number,
  top10: number,
  top12: number,
  top25: number,
  matches: number,
  top3: number,
  dateCollected: string,
  score: number,
  platform: number,
  trnRating: number,
  trnRatingChange: number
}>

declare type Player = {
  accountId: string,
  platformId: number,
  platformName: string,
  platformNameLong: string,
  epicUserHandle: string,
  stats: StatsType,
  lifeTimeStats: $ReadOnlyArray<{
    key: string,
    value: string
  }>,
  recentMatches: RecentMatchesType
}
