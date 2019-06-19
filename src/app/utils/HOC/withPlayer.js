// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { pick } from 'ramda'
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

function withPlayer(Component: React.ComponentType<any>) {
  function WithPlayerHOC({ match, getUserInfoPlayer, player }: Props) {
    React.useEffect(() => {
      if (match && hasCorrectParams(match.params)) {
        getUserInfoPlayer(match.params)
      }
    }, [match, getUserInfoPlayer])

    function hasCorrectParams(params: Params): Boolean {
      const { username, platform } = pick(['username', 'platform'], params)

      return !!(username && platform)
    }

    return <Component player={player} />
  }

  function mapStateToProps(state) {
    return {
      player: state.player
    }
  }

  const mapDispatchToProps = {
    getUserInfoPlayer
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithPlayerHOC)
}

export default withPlayer
