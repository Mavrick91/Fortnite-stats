// @flow

import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import PlaylistChoice from 'app/components/PlaylistChoice'
import playlists from 'app/constants/playlist'
// import SoloTrend from './components/SoloTrend'
// import { translateMode } from 'app/utils'

type Props = {
  player: Player,
  fetchProgressPlayer: (string, string) => void
}

const Wrapper = styled.div`
  margin-top: 23px;
`

const RowStyled = styled(Row)`
  margin: 23px 0;
`

function Progress({ player, fetchProgressPlayer }: Props) {
  const [mode, setMode] = React.useState(playlists.solo)

  React.useEffect(() => {
    fetchProgressPlayer(player.accountId, mode)
  }, [player.accountId, mode, fetchProgressPlayer])

  return (
    <Wrapper>
      <PlaylistChoice setMode={setMode} playlistActive={mode} />
      <RowStyled noGutters>
        <Col xs={4}>
          {/*<SoloTrend mode={translateMode(mode)} />*/}
        </Col>
      </RowStyled>
    </Wrapper>
  )
}

export default Progress
