import customAxios from './config'

export const getPlayerStat = (username, platform) =>
  customAxios({
    url: `/v1/profile/${platform}/${username}`
  })

export const getPlayerMatchesHistory = accountId =>
  customAxios({
    url: `/v1/profile/account/${accountId}/matches`
  })

export const getPlayerHistory = (accountId, mode) =>
  customAxios({
    url: `/api/v0/profile/${accountId}/historical?mode=${mode}&period=daily&platform=3`
  })
