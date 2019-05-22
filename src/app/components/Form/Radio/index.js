// @flow

import React from 'react'
import Form from 'react-bootstrap/Form'
import { Field } from 'redux-form'
import type { FieldProps } from 'redux-form'

type Props = {|
  options: $ReadOnlyArray<{
    label: string,
    value: string
  }>,
  name: string
|}

const Radio = ({ name, options }: Props) => (
  <Form.Group>
    <Field
      name={name}
      component={({ input }: FieldProps) => {
        return (
          <Form.Control as='select' {...input}>
            {options.map(({ value, label }) => (
              <option key={label} value={value}>
                {label}
              </option>
            ))}
          </Form.Control>
        )
      }}
    />
  </Form.Group>
)

export default Radio
