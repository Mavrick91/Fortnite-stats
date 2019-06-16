import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { isEmpty, pick } from 'ramda'
import Card from 'app/components/Card'

const getPlaylist = playlist => {
  switch (playlist) {
    case 'p2':
      return 'SOLO'
    case 'p10':
      return 'DUO'
    case 'p9':
      return 'SQUAD'
    default:
      return '...'
  }
}

const getInfoRight = match => ({
  mode: getPlaylist(match.playlist),
  score: `+${match.score}`,
  kills: match.kills
})

function getFormattedTitle(placeTop: string, isWin: string): string {
  if (isWin) return 'WINNER!'
  if (!placeTop) return 'DEFEAT'

  const whatTop = placeTop.split('top').filter(value => value.length > 0)
  return `TOP ${whatTop}`
}

const WrapperContent = styled.div`
  ${({ placeTop, isWin }) => css`
    border-left: 4px solid
      ${placeTop && !isWin ? '#4d4d4d' : isWin ? '#5cfc7b' : '#ff3333'};
    border-bottom: 1px solid #202020;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 21px;
    width: 100%;
  `}
`

const InfoRight = styled.div`
  width: 90px;
`

const Label = styled.span`
  ${({ fz = 1 }) => css`
    font-size: ${fz}rem;
    color: #9a9a9a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bolder;
  `}
`

const Value = styled.span`
  ${({ fz = 1 }) => css`
    font-size: ${fz}rem;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bolder;
  `}
`

const Wrapper = styled.div`
  margin-top: 25px;
`

class Matches extends Component {
  componentDidMount() {
    const { fetchAllMatches, player } = this.props

    if (player && fetchAllMatches) fetchAllMatches(player.accountId)
  }

  render() {
    const { matches } = this.props

    if (!matches || isEmpty(matches)) return null

    return (
      <Wrapper>
        <Card
          content={matches.map(match => {
            let placeTop = null
            const tops = pick(
              ['top3', 'top5', 'top10', 'top6', 'top12', 'top25'],
              match
            )
            const top = Object.keys(tops).reduce((acc, key) => {
              if (tops[key]) acc.push(key)
              return acc
            }, [])

            if (top.length >= 1) placeTop = top[0]

            const isWin = match.top1
            const formattedTitle = getFormattedTitle(placeTop, isWin)
            const infoRight = getInfoRight(match)

            return (
              <WrapperContent
                key={match.id}
                isWin={isWin}
                placeTop={placeTop}
                data-test='wrapper-row-match'
              >
                <Value>{formattedTitle}</Value>
                <div className='d-flex w-25 align-items-end'>
                  {Object.keys(infoRight).map(key => {
                    return (
                      <InfoRight
                        className='d-flex flex-column align-items-end'
                        key={key}
                      >
                        <Label fz='.8'>{key.toUpperCase()}</Label>
                        <Value>{infoRight[key]}</Value>
                      </InfoRight>
                    )
                  })}
                </div>
              </WrapperContent>
            )
          })}
        />
      </Wrapper>
    )
  }
}

export default Matches
