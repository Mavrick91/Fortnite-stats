// @flow

import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import type { FormProps } from 'redux-form';
import Input from 'app/components/Form/Input';

const ContainerStyled = styled(Container)`
  background-color: #f0f0f0;
`;

type Props = FormProps;

const Home = ({ handleSubmit, pristine, invalid, submitting, ...r }: Props) => (
  <ContainerStyled fluid className="h-100">
    <Row className="justify-content-center h-100 align-items-center" noGutters>
      <Col xs={6}>
        <Form onSubmit={handleSubmit}>
          <Input label="Player Name" name="username" />
          <Row className="align-items-center" noGutters>
            <Button
              variant="primary"
              type="submit"
              disabled={pristine || invalid || submitting}
              className="mr-3"
            >
              Search player
            </Button>
            {submitting && <Spinner animation="grow" variant="primary" />}
          </Row>
        </Form>
      </Col>
    </Row>
  </ContainerStyled>
);

export default Home;
