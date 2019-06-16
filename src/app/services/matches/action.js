import { FETCH_MATCH_HISTORY_REQUEST } from './reducer'

export const fetchAllMatches = accountId => ({
  type: FETCH_MATCH_HISTORY_REQUEST,
  accountId,
  requestName: FETCH_MATCH_HISTORY_REQUEST
})
