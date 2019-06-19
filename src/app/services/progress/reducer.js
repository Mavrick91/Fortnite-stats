export const FETCH_HISTORICAL_REQUEST = 'FETCH_HISTORICAL_REQUEST'
export const FETCH_HISTORICAL_SUCCEEDED = 'FETCH_HISTORICAL_SUCCEEDED'
export const FETCH_HISTORICAL_FAILED = 'FETCH_HISTORICAL_FAILED'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HISTORICAL_SUCCEEDED:
      return state

    default:
      return state
  }
}
