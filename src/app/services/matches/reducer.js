export const FETCH_MATCH_HISTORY_REQUEST = 'FETCH_MATCH_HISTORY_REQUEST'
export const FETCH_MATCH_HISTORY_SUCCEEDED = 'FETCH_MATCH_HISTORY_SUCCEEDED'
export const FETCH_MATCH_HISTORY_FAILED = 'FETCH_MATCH_HISTORY_FAILED'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MATCH_HISTORY_SUCCEEDED:
      return action.data

    default:
      return state
  }
}
