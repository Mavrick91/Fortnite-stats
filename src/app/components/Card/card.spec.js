import React from 'react'
import Card from './index'
import { shallow } from 'enzyme'

describe('Card component', () => {
  it('should not render component', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper.type()).toBe(null)
  })
  it('should render Header if props provided', () => {
    const wrapper = shallow(<Card header='custom header' />)

    expect(wrapper.contains('custom header')).toBe(true)
  })
  it('should render SubHeader if props provided', () => {
    const wrapper = shallow(<Card subHeader='custom subHeader' />)

    expect(wrapper.contains('custom subHeader')).toBe(true)
  })
  it('should render Content if props provided', () => {
    const wrapper = shallow(<Card content='custom content' />)

    expect(wrapper.contains('custom content')).toBe(true)
  })
})
