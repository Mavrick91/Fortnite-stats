import React from 'react'
import Card from 'app/components/Card'
import { formatNumber } from 'app/utils'
import styled, { css } from 'styled-components'
import { pick } from 'ramda'

const WrapperCard = styled.div`
  display: flex;

  & > div {
    flex: 1;

    & + div {
      margin-left: 23px;
    }
  }
`

const Label = styled.span`
  font-size: 0.67rem;
  color: #9a9a9a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bolder;
`

const Value = styled.span`
  font-size: 1.13rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bolder;
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

const GameMode = styled.div`
  padding: 4px 12px;
  color: black;
  font-weight: bolder;
`

const OneValue = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 15px;

  & > {
    &:first-child {
      font-size: 0.7rem;
      color: #9a9a9a;
      font-weight: bolder;
    }

    &:nth-child(2) {
      font-size: 1.2rem;
      color: white;
      font-weight: bolder;
    }

    &:nth-child(3) {
      font-size: 0.7rem;
      color: white;
      font-weight: bolder;
    }
  }
`

const COLORS = {
  '0': ['#cc0000', '#990000'],
  '1': ['#EDDDD4', '#706F6F'],
  '2': ['#197278', '#283D3B']
}

const getContent = stats => {
  return pick(
    ['top1', 'kills', 'winRatio', 'kd', 'kpg', 'score', 'scorePerMatch'],
    stats
  )
}

const Stats = ({ stats }) => {
  return (
    <WrapperCard>
      {Object.keys(stats).map((key, index) => {
        const stat = stats[key]
        const contentToDisplay = getContent(stat)

        return (
          <Card
            key={key}
            bgHeader={COLORS[index][0]}
            header={
              <React.Fragment>
                <GameMode>{key.toUpperCase()}</GameMode>
                <NumberMatches bgColor={COLORS[index][1]}>
                  {stat.matches.displayValue} {stat.matches.label}
                </NumberMatches>
              </React.Fragment>
            }
            subHeader={
              <React.Fragment>
                <div className='d-flex flex-column'>
                  <Label>{stat.trnRating.label.toUpperCase()}</Label>
                  <Value>{stat.trnRating.displayValue}</Value>
                </div>
                <div className='d-flex flex-column'>
                  <Label>RANK</Label>
                  <Value>#{formatNumber(stat.trnRating.rank)}</Value>
                </div>
              </React.Fragment>
            }
            content={Object.values(contentToDisplay).map(
              // $FlowFixMe
              ({ displayValue, label, rank }: TopWithPercent) => {
                return (
                  <OneValue key={label}>
                    <span>{label.toUpperCase()}</span>
                    <span>{displayValue}</span>
                    <span>#{formatNumber(rank)}</span>
                  </OneValue>
                )
              }
            )}
            paddingContent
          />
        )
      })}
    </WrapperCard>
  )
}

export default Stats
