// @flow

import React from 'react'
import { pick } from 'ramda'
import styled, { css } from 'styled-components'
import Card from 'app/components/Card'

type Props = {
  recentMatches: RecentMatchesType
}

const COLORS = ['#336699', '#2F4858']

const Wrapper = styled.div`
  margin-top: 23px;
`

const Title = styled.div`
  color: black;
  padding: 4px 12px;
  font-weight: bolder;
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

const NumberMatches = styled.div`
  ${({ bgColor }) => css`
    padding: 4px 12px;
    color: white;
    background-color: ${bgColor};
    position: relative;
    text-align: end;
  `}

  &::before {
    content: '';
    width: 40px;
    height: 100%;
    display: block;
    background: inherit;
    position: absolute;
    left: -39px;
    top: 0;
    clip-path: polygon(100% 0%, 100% 100%, 54% 40%, 56% 67.5%, 0% 0%);
  }
`

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
  `}
`

const InfoRight = styled.div`
  width: 90px;
`

const getSubHeaderContent = (recentMatches: RecentMatchesType) => {
  return recentMatches.reduce(
    (acc, match) => {
      acc['kills'] += match.kills
      acc['wins'] += match.top1
      acc['score'] += match.score
      acc['top 3/5/10'] += match.top3 + match.top5 + match.top10
      acc['top 6/12/25'] += match.top6 + match.top12 + match.top25
      return acc
    },
    {
      kills: 0,
      wins: 0,
      score: 0,
      'top 3/5/10': 0,
      'top 6/12/25': 0
    }
  )
}

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

const getFormattedTitle = (placeTop: ?string, isWin: number): string => {
  if (isWin) return 'WINNER!'
  if (!placeTop) return 'DEFEAT'

  const whatTop = placeTop.split('top').filter(value => value.length > 0)[0]

  return `TOP ${whatTop}`
}

const RecentMatches = ({ recentMatches }: Props) => {
  const subHeaderContent = getSubHeaderContent(recentMatches)

  return (
    <Wrapper>
      <Card
        bgHeader={COLORS[0]}
        header={
          <React.Fragment>
            <Title>RECENT MATCHES</Title>
            <NumberMatches bgColor={COLORS[1]}>
              {recentMatches.length} Previous matches
            </NumberMatches>
          </React.Fragment>
        }
        subHeader={
          <React.Fragment>
            {Object.keys(subHeaderContent).map(key => {
              const value = subHeaderContent[key]

              return (
                <div className='d-flex flex-column' key={key}>
                  <Label fz='.7'>{key.toUpperCase()}</Label>
                  <Value fz='1.13'>{value}</Value>
                </div>
              )
            })}
          </React.Fragment>
        }
        content={
          <div className='w-100'>
            {recentMatches.map(match => {
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
          </div>
        }
      />
    </Wrapper>
  )
}

export default RecentMatches
