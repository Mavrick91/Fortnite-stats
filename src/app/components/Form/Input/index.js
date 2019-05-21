// @flow

import React from 'react';
import Form from 'react-bootstrap/Form';
import { Field } from 'redux-form';
import type { FieldProps } from 'redux-form';

type Props = {|
  label?: string,
  name: string,
|};

const renderInput = ({ input, meta: { touched, error } }: FieldProps) => (
  <React.Fragment>
    <Form.Control
      type="text"
      {...input}
      isInvalid={touched && error}
      maxLength={16}
    />
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </React.Fragment>
);

const Input = ({ label, name }: Props) => (
  <Form.Group>
    {label && <Form.Label>{label}</Form.Label>}
    <Field name={name} component={renderInput} />
  </Form.Group>
);

export default Input;
