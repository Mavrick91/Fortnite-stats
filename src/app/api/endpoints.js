import customAxios from './config'

export const getPlayerStat = (username, platform) =>
  customAxios({
    url: `/profile/${platform}/${username}`
  })

export const getPlayerMatchesHistory = (accountId) =>
  customAxios({
    url: `/profile/account/${accountId}/matches`
  })

export const getPlayerHistory = (accountId, mode) =>
  customAxios({
    url: `/profile/${accountId}/historical?mode=${mode}&period=daily&platform=3`,
    proxy: `https://fortnitetracker.com/api/v0`
  })
