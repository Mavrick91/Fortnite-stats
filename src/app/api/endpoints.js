import customAxios from './config'

export const getPlayerStat = (username, platform) =>
  customAxios({
    url: `/profile/${platform}/${username}`
  })
