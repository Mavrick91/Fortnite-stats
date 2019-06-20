// @flow

import * as React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  header?: React.Node,
  subHeader?: React.Node,
  content?: React.Node,
  bgHeader?: string,
  paddingContent?: boolean
}

const Wrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`

const Header = styled.div`
  ${({ bgHeader }) => css`
    display: flex;
    background-color: ${bgHeader};
    justify-content: space-between;
  `}
`

const SubHeader = styled.div`
  background-color: #363636;
  padding: 15px 20px;
  display: flex;

  & > div + div {
    margin-left: 15px;
`

const Content = styled.div`
  ${({ paddingContent }) => css`
    background-color: #292929;
    min-height: 200px;
    padding: ${paddingContent ? '20px 20px 5px' : 0};
    display: flex;
    flex-wrap: wrap;
  `}
`

const Card = ({
  header,
  subHeader,
  content,
  bgHeader,
  paddingContent
}: Props) => {
  if (!header && !subHeader && !content) return null

  return (
    <Wrapper>
      {header && <Header bgHeader={bgHeader}>{header}</Header>}
      {subHeader && <SubHeader>{subHeader}</SubHeader>}
      {content && <Content paddingContent={paddingContent}>{content}</Content>}
    </Wrapper>
  )
}

export default Card
