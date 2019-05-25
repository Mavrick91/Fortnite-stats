// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { isEmpty, pick } from 'ramda'
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
  player: Player
}

const withPlayer = (Component: React.ComponentType<any>) => {
  class WithPlayerHOC extends React.Component<Props> {
    componentDidUpdate() {
      const { match, getUserInfoPlayer, player } = this.props

      if (
        this.hasCorrectParams(match.params) &&
        !isEmpty(player) &&
        match.params.username !== player.epicUserHandle.toLowerCase()
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
      return <Component {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    player: state.player
  })

  const mapDispatchToProps = {
    getUserInfoPlayer: (platform, username) =>
      getUserInfoPlayer(platform, username)
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithPlayerHOC)
}

export default withPlayer
