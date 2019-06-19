import React from 'react'
import styled, { css } from 'styled-components'
import { isEmpty } from 'ramda'
import Card from 'app/components/Card'
import { getInfoMatch } from 'app/utils/infoRowMatch'

const WrapperContent = styled.div`
  ${({ top, isWin }) => css`
    border-left: 4px solid
      ${top && !isWin ? '#4d4d4d' : isWin ? '#5cfc7b' : '#ff3333'};
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

function Matches({ fetchAllMatches, player, matches }: Props) {
  React.useEffect(() => {
    fetchAllMatches(player.accountId)
  }, [player, fetchAllMatches])

  if (!matches || isEmpty(matches)) return null

  return (
    <Wrapper>
      <Card
        content={matches.map(match => {
          const { isWin, title, infoRight, top } = getInfoMatch(match)

          return (
            <WrapperContent key={match.id} isWin={isWin} top={top}>
              <Value>{title}</Value>
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

export default Matches
