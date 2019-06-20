// @flow

import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import ResearchProfile from './components/ResearchProfile'
import NavProfile from './components/NavProfile'
import InfoProfile from './components/InfoProfile'
import Overview from 'app/screens/Overview'
import Matches from 'app/screens/Matches'
import Progress from 'app/screens/Progress'

type Props = {
  player: ?Player
}

const WrapperSection = styled.div`
  margin-bottom: 23px;
`

function Profile({ player }: Props) {
  const [activeNav, setActiveNav] = React.useState('PROGRESS')

  function displaySection() {
    switch (activeNav) {
      case 'OVERVIEW':
        return <Overview player={player} />
      case 'MATCHES':
        return <Matches player={player} />
      case 'PROGRESS':
        return <Progress player={player} />
      default:
        return <div />
    }
  }

  return (
    <Container fluid className='h-100 p-0'>
      <ResearchProfile />
      {player && (
        <InfoProfile player={player}>
          <NavProfile
            player={player}
            setActiveNav={setActiveNav}
            activeNav={activeNav}
          />
          <WrapperSection>{displaySection()}</WrapperSection>
        </InfoProfile>
      )}
    </Container>
  )
}

export default Profile
