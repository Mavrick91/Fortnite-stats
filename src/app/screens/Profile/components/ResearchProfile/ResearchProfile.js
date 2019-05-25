// @flow

import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import type { FormProps } from 'redux-form'
import Input from 'app/components/Form/Input'
import Radio from 'app/components/Form/Radio'
import bgHeader from 'app/ressources/images/bg-header.jpg'

const RowStyled = styled(Row)`
  height: 340px;
  background-image: url(${bgHeader});
  background-size: cover;
  background-repeat: no-repeat;
`

const InputStyled = styled(Input)`
  & > input {
    font-family: 'burbank';
    font-size: 35px;
    padding: 15px 30px 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    letter-spacing: 1px;
    color: black;

    &::placeholder {
      color: #485457;
    }
  }
`
const createOptions = [
  { label: 'Pc', value: 'pc' },
  { label: 'PS', value: 'psn' },
  { label: 'Xbox', value: 'xb1' }
]

const ResearchProfile = ({ handleSubmit }: FormProps) => {
  return (
    <RowStyled className='justify-content-center align-items-center'>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Row className='justify-content-center'>
            <Col xs={6}>
              <InputStyled
                name='username'
                placeholder='Enter your EPIC name...'
              />
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={3}>
              <Radio name='platform' options={createOptions} />
            </Col>
          </Row>
        </Form>
      </Col>
    </RowStyled>
  )
}

export default ResearchProfile
