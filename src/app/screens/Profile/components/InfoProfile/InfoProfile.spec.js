import React from 'react'
import { shallow } from 'enzyme'
import InfoProfile from './InfoProfile'

describe('InfoProfile', () => {
  const wrapper = shallow(<InfoProfile>test de render</InfoProfile>)

  it('should render component', () => {
    expect(wrapper.type()).not.toBe(null)
  })

  it('should render children', () => {
    expect(wrapper.contains('test de render')).toBe(true)
  })
})
