import React from 'react'
import { shallow } from 'enzyme'
import NavProfile from './NavProfile'

describe('NavProfile', () => {
  const props = {
    player: {
      epicUserHandle: 'toto'
    },
    setActiveNav: jest.fn(),
    activeNav: 'OVERVIEW'
  }
  const wrapper = shallow(<NavProfile {...props} />)

  it('should render component', () => {
    expect(wrapper.type()).not.toBe(null)
  })

  it('should display the name of the player', () => {
    expect(wrapper.contains('toto')).toBe(true)
  })

  it('should display 3 navigation item', () => {
    expect(
      wrapper.find("[data-test='item-navigation']").children()
    ).toHaveLength(3)
  })

  it('should trigger onClick to change tab', () => {
    wrapper
      .find("[data-test='item-navigation']")
      .childAt(1)
      .simulate('click')
    expect(props.setActiveNav).toBeCalledTimes(1)
  })
})
