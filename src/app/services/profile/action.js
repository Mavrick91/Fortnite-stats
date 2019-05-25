import { GET_INFO_PLAYER_REQUEST } from './reducer'

export const getUserInfoPlayer = payload => ({
  type: GET_INFO_PLAYER_REQUEST,
  payload,
  requestName: GET_INFO_PLAYER_REQUEST
})
