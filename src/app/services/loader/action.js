// @flow

import { LOADING, LOADED, ERROR, RESET_LOADER } from './reducer'

const loading = (requestName: string) => ({
  type: LOADING,
  requestName
})

const loaded = (requestName: string) => ({
  type: LOADED,
  requestName
})

const error = (requestName: string, err: any) => ({
  type: ERROR,
  requestName,
  err
})

const reset = () => ({
  type: RESET_LOADER
})

export default {
  loading,
  loaded,
  error,
  reset
}
