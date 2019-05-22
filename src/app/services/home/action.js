import { GET_INFO_PLAYER_REQUEST } from './reducer'

export const getUserIdPlayer = (payload) => ({
  type: GET_INFO_PLAYER_REQUEST,
  payload,
});
