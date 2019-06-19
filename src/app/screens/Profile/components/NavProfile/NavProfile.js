// @flow

import React from 'react'
import styled, { css } from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import avatar from 'app/ressources/images/avatar.png'

type Props = {
  player: Player,
  activeNav: string,
  setActiveNav: any => void
}

const RowStyled = styled(Row)`
  height: 150px;
  background-color: #292929;
`

const RowName = styled(Row)`
  height: 100px;
`

const AvatarPlayer = styled.img`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 100px;
  border: 2px solid white;
`

const NamePlayer = styled.div`
  font-size: 2rem;
  color: white;
  margin-left: 15px;
  font-weight: bolder;
`

const RowNavigation = styled(Row)`
  flex-grow: 1;
`

const ItemNavigation = styled.div`
  ${({ isActive }) =>
    css`
      padding: 0 15px;
      font-weight: bolder;
      height: 50px;
      line-height: 40px;
      ${isActive && 'border-bottom: 2px solid crimson'};
      color: ${isActive ? 'crimson' : 'white'};
      user-select: none;

      &:hover {
        cursor: pointer;
      }
    `}
`

const navigations = ['OVERVIEW', 'PROGRESS', 'MATCHES']

function NavProfile({ player, activeNav, setActiveNav }: Props) {
  return (
    <RowStyled noGutters>
      <Col>
        <RowName className='px-3' noGutters>
          <Col className='d-flex align-items-center'>
            <AvatarPlayer src={avatar} />
            <NamePlayer>{player.epicUserHandle}</NamePlayer>
          </Col>
        </RowName>
        <RowNavigation noGutters>
          <Col className='d-flex' data-test='item-navigation'>
            {navigations.map(navigation => (
              <ItemNavigation
                key={navigation}
                isActive={activeNav === navigation}
                onClick={() => setActiveNav(navigation)}
              >
                {navigation}
              </ItemNavigation>
            ))}
          </Col>
        </RowNavigation>
      </Col>
    </RowStyled>
  )
}

export default NavProfile
