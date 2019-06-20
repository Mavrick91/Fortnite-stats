// @flow

import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  label?: string,
  value: string,
  color: string,
  disable?: boolean,
  list?: $ReadOnlyArray<{
    id: number | string,
    value: string
  }>,
  updateValue?: string => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 49px;
  flex: 1;
`

const Label = styled.div`
  font-size: 9px;
  font-weight: 900;
  color: #9a9a9a;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 3px;
`

const Content = styled.div`
  ${({ disable, disableArrow }) => css`
    display: flex;
    position: relative;
    background: ${disable ? 'unset' : '#404040'};
    user-select: none;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12);
    min-height: 34px;
    max-height: 34px;
    cursor: ${disable ? 'inherit' : 'pointer'};
    &::before {
      ${!disable && !disableArrow && 'content: ""'};
      position: absolute;
      bottom: calc(50% - 6px);
      right: 1.6rem;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #fff;
    }
    &::after {
      ${!disable && !disableArrow && 'content: ""'};
      position: absolute;
      top: calc(50% - 6px);
      right: 1.6rem;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #fff;
    }
  `}
`

const Value = styled.div`
  ${({ disable }) => css`
    color: white;
    font-size: 12.6px;
    border: ${!disable ? 'none' : '2px solid #404040'};
    background: ${disable ? 'none' : '#404040'};
    width: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
    ${({ hover }) =>
      hover &&
      css`
        padding: 3px 20px;
        &: hover {
          background: rgba(200, 200, 200, 0.3);
        }
      `};
  `}
`

const Dot = styled.div`
  ${({ color }) => css`
    height: 10px;
    width: 10px;
    border-radius: 20px;
    background-color: ${color};
    margin: 0 20px;
  `}
`

const WrapperItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

function Dropdown({ label, updateValue, value, color, list, disable }: Props) {
  const [show, setShow] = React.useState(false)
  const listRef = React.useRef(null)

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (listRef.current && !listRef.current.contains(e.target)) {
        setShow(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function displayListItems(list) {
    return (list || []).map(item => (
      <Content
        data-test='content-item'
        disableArrow={true}
        key={item.id}
        onClick={e => {
          e.stopPropagation()
          if (updateValue) updateValue(item.value)
          setShow(false)
        }}
      >
        <Value hover>{item.value}</Value>
      </Content>
    ))
  }

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Content
        data-test='content'
        onClick={() => {
          if (!disable) setShow(true)
        }}
        disable={disable}
      >
        <Value data-test='actual-value' disable={disable}>
          {color && <Dot data-test='color-dot' color={color} />}
          <span>{value}</span>
        </Value>
        {show && (
          <WrapperItem ref={listRef}>{displayListItems(list)}</WrapperItem>
        )}
      </Content>
    </Wrapper>
  )
}

export default Dropdown
