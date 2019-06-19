// @flow

import React from 'react'
import styled, { css } from 'styled-components'
import playlists from 'app/constants/playlist'

type Props = {
  setMode: string => void,
  playlistActive: string
}

const Wrapper = styled.div`
  margin-top: 23px;
`

const Playlist = styled.div`
  color: #9a9a9a;
  font-size: 9px;
  font-weight: bolder;
  height: 17px;
`

const WrapperChoice = styled.div`
  display: flex;
`

const Item = styled.div`
  ${({ isActive }) => css`
    font-size: 12.6px;
    font-weight: bolder;
    color: ${isActive ? `crimson` : `white`};
    background-color: ${isActive ? `#333` : `#404040`};
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #4d4d4d;
    }
  `}
`

const PlaylistChoice = ({ setMode, playlistActive }: Props) => {
  return (
    <Wrapper>
      <Playlist>PLAYLIST</Playlist>
      <WrapperChoice>
        {Object.keys(playlists).map(key => {
          const playlist = playlists[key]

          return (
            <Item
              key={playlist}
              isActive={playlistActive === playlist}
              onClick={() => setMode(playlist)}
            >
              {key}
            </Item>
          )
        })}
      </WrapperChoice>
    </Wrapper>
  )
}

export default PlaylistChoice
