import { createSelector } from 'reselect'
import { path } from 'ramda'

const isLoaded = createSelector(
  state => state,
  (_, key) => key,
  (state, key) => {
    const value = path(['loader', key], state)

    return !!(typeof value === 'number' && value === 0)
  }
)

const isLoading = createSelector(
  state => state,
  (_, key) => key,
  (state, key) => {
    const value = path(['loader', key], state)

    return !!(typeof value === 'number' && value === 1)
  }
)

export default {
  isLoaded,
  isLoading
}
