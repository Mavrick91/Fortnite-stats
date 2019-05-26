// @flow

import * as React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
  children: React.Node,
  player: Player
}

const RowStyled = styled(Row)`
  background-color: #1f1f1f;
`

const InfoProfile = ({ children, player }: Props) => {
  return (
    <RowStyled className='justify-content-center'>
      <Col xs={9} className='mt-n5'>
        {/* $FlowFixMe */}
        {React.cloneElement(children, { player })}
      </Col>
    </RowStyled>
  )
}

export default InfoProfile
