// @flow

import * as React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
  children: React.Node
}

const RowStyled = styled(Row)`
  background-color: #1f1f1f;
`

const InfoProfile = ({ children }: Props) => {
  return (
    <RowStyled className='justify-content-center' noGutters>
      <Col xs={10} className='mt-n5'>
        {children}
      </Col>
    </RowStyled>
  )
}

export default InfoProfile
