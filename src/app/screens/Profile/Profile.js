// @flow

import React from 'react'
import Container from 'react-bootstrap/Container'
import ResearchProfile from './components/ResearchProfile'
import NavProfile from './components/NavProfile'
import InfoProfile from './components/InfoProfile'

type Props = {
  player: ?Player
}

const Profile = ({ player }: Props) => {
  return (
    <Container fluid className='h-100 p-0'>
      <ResearchProfile />
      <InfoProfile player={player}>
        <NavProfile />
      </InfoProfile>
    </Container>
  )
}

export default Profile
