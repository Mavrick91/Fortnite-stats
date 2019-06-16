// @flow

import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import ResearchProfile from './components/ResearchProfile'
import NavProfile from './components/NavProfile'
import InfoProfile from './components/InfoProfile'
import Overview from 'app/screens/Overview'
import Matches from 'app/screens/Matches'

type ActiveNav = 'OVERVIEW' | 'PROGRESS' | 'MATCHES'

type Props = {
  player: ?Player,
  activeNav: ActiveNav,
  setActiveNav: string => void
}

const WrapperSection = styled.div`
  margin-bottom: 23px;
`

const displaySection = (activeNav: ActiveNav, player: Player) => {
  switch (activeNav) {
    case 'OVERVIEW':
      return <Overview player={player} />
    case 'MATCHES':
      return <Matches player={player} />
    default:
      return <div />
  }
}

const Profile = ({ player, activeNav, setActiveNav }: Props) => (
  <Container fluid className='h-100 p-0'>
    <ResearchProfile />
    {player && (
      <InfoProfile player={player}>
        <NavProfile
          player={player}
          setActiveNav={setActiveNav}
          activeNav={activeNav}
        />
        <WrapperSection>{displaySection(activeNav, player)}</WrapperSection>
      </InfoProfile>
    )}
  </Container>
)

export default Profile
