// @flow

import React from 'react'
import styled from 'styled-components'
import Stats from './components/Stats'
import RecentMatches from './components/RecentMatches'

type Props = {
  stats: StatsType,
  recentMatches: RecentMatchesType
}

const Wrapper = styled.div`
  margin-top: 23px;
`

const Overview = ({ stats, recentMatches }: Props) => {
  return (
    <Wrapper>
      <Stats stats={stats} />
      <RecentMatches recentMatches={recentMatches} />
    </Wrapper>
  )
}

export default Overview
