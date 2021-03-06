export const GET_INFO_PLAYER_REQUEST = 'GET_INFO_PLAYER_REQUEST'
export const GET_INFO_PLAYER_SUCCEEDED = 'GET_INFO_PLAYER_SUCCEEDED'
export const GET_INFO_PLAYER_FAILED = 'GET_INFO_PLAYER_FAILED'

export default (state = null, action) => {
  switch (action.type) {
    case GET_INFO_PLAYER_SUCCEEDED:
      return {
        ...action.data
      }

    case GET_INFO_PLAYER_FAILED:
      return { error: action.data }

    default:
      return state
  }
}
