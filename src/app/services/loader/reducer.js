// @flow

export const LOADING = 'LOADING'
export const LOADED = 'LOADED'
export const ERROR = 'ERROR'
export const RESET_LOADER = 'RESET_LOADER'

const initialState = {}

type LoaderAction = { type: string, requestName: string }
type State = { [key: string]: string }

export default (state: State = initialState, action: LoaderAction) => {
  switch (action.type) {
    case LOADING:
      if (!action.requestName) return state
      return {
        ...state,
        [action.requestName]: 1
      }
    case LOADED:
      if (!action.requestName) return state
      return {
        ...state,
        [action.requestName]: 0
      }
    case ERROR:
      if (!action.requestName) return state
      return {
        ...state,
        [action.requestName]: -1
      }
    case RESET_LOADER:
      return initialState

    default:
      return state
  }
}
