import customAxios from './config'

export const getPlayerStat = (username, platform) =>
  customAxios({
    url: `/profile/${platform}/${username}`
  })

export const getPlayerMatchesHistory = (accountId) =>
  customAxios({
    url: `/profile/account/${accountId}/matches`
  })
