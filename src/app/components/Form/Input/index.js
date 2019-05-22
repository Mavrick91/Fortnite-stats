// @flow

import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import { Field } from 'redux-form'
import type { FieldProps } from 'redux-form'

type Props = {|
  label?: string,
  name: string,
  className?: string,
  placeholder?: string
|}

type CustomFieldProps = {
  placeholder: string
} & FieldProps

const ControlStyled = styled(Form.Control)`
  display: block;
  width: 100%;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`

const renderInput = ({
  input,
  meta: { touched, error },
  placeholder
}: CustomFieldProps) => (
  <React.Fragment>
    <ControlStyled
      type='text'
      {...input}
      isInvalid={error}
      maxLength={16}
      placeholder={placeholder}
      autoComplete='off'
    />
    <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
  </React.Fragment>
)

const Input = ({ label, name, className, placeholder }: Props) => (
  <Form.Group className={className}>
    {label && <Form.Label>{label}</Form.Label>}
    {/* // $FlowFixMe */}
    (<Field name={name} component={renderInput} placeholder={placeholder} />)
  </Form.Group>
)

export default Input
