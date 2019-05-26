// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { path, pick } from 'ramda'
import { getUserInfoPlayer } from 'app/services/profile/action'

type Params = {
  username?: String,
  platform?: String
}

type Props = {
  match: {
    params: Params
  },
  getUserInfoPlayer: Params => void,
  player: ?Player
}

const withPlayer = (Component: React.ComponentType<any>) => {
  class WithPlayerHOC extends React.Component<Props> {
    componentDidUpdate() {
      const { match, getUserInfoPlayer, player } = this.props
      const username = path(['params', 'username'], match).toLowerCase()
      const epicName = path(['epicUserHandle'], player).toLowerCase()

      if (
        this.hasCorrectParams(match.params) &&
        player &&
        username !== epicName
      )
        this.fetchInfoPlayer(getUserInfoPlayer, match.params)
    }

    componentDidMount() {
      const { match, getUserInfoPlayer } = this.props

      if (this.hasCorrectParams(match.params))
        this.fetchInfoPlayer(getUserInfoPlayer, match.params)
    }

    hasCorrectParams = (params: Params): Boolean => {
      const { username, platform } = pick(['username', 'platform'], params)

      return !!(username && platform)
    }

    fetchInfoPlayer = (getUserInfoPlayer, params) => {
      getUserInfoPlayer(params)
    }

    render() {
      const { getUserInfoPlayer, ...restProps } = this.props

      return <Component {...restProps} />
    }
  }

  const mapStateToProps = state => ({
    player: state.player
  })

  const mapDispatchToProps = {
    getUserInfoPlayer
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithPlayerHOC)
}

export default withPlayer
