// @flow

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import type { FormProps } from 'redux-form'
import Input from 'app/components/Form/Input'
import Radio from 'app/components/Form/Radio'

type Props = FormProps

const createOptions = [
  { label: 'Pc', value: 'pc' },
  { label: 'PS', value: 'psn' },
  { label: 'Xbox', value: 'xb1' }
]

const Home = ({ handleSubmit, pristine, invalid, submitting }: Props) => (
  <Container fluid className='h-100'>
    <Row className='justify-content-center h-100 align-items-center' noGutters>
      <Col xs={6}>
        <Form onSubmit={handleSubmit}>
          <Input label='Player Name' name='username' />
          <Radio name='platform' options={createOptions} />
          <Row className='align-items-center' noGutters>
            <Button
              variant='primary'
              type='submit'
              disabled={pristine || invalid || submitting}
              className='mr-3'
            >
              Search player
            </Button>
            {submitting && <Spinner animation='grow' variant='primary' />}
          </Row>
        </Form>
      </Col>
    </Row>
  </Container>
)

export default Home
