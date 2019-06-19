// @flow

import React from 'react'
import styled from 'styled-components'
import PlaylistChoice from 'app/components/PlaylistChoice'
import playlists from 'app/constants/playlist'

type Props = {
  player: Player,
  fetchProgressPlayer: (string, string) => void
}

const Wrapper = styled.div`
  margin-top: 23px;
`

function Progress({ player, fetchProgressPlayer }: Props) {
  const [mode, setMode] = React.useState(playlists.solo)

  React.useEffect(() => {
    fetchProgressPlayer(player.accountId, mode)
  }, [player.accountId, mode, fetchProgressPlayer])

  return (
    <Wrapper>
      <PlaylistChoice setMode={setMode} playlistActive={mode} />
    </Wrapper>
  )
}

export default Progress
