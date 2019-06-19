import React from 'react'
import PlaylistChoice from './index'
import { shallow } from 'enzyme'

describe('PlaylistChoice', () => {
  const setMode = jest.fn()
  const wrapper = shallow(
    <PlaylistChoice setMode={setMode} playlistActive={'p2'} />
  )

  it('should render the component', () => {
    expect(wrapper.type()).not.toBe(null)
  })

  it('should have 3 button to change the playlist mode', () => {
    expect(wrapper.childAt(1).children()).toHaveLength(3)
  })

  it('should call the function when click on an element', () => {
    wrapper
      .childAt(1)
      .childAt(1)
      .simulate('click')
    expect(setMode).toHaveBeenCalledTimes(1)
  })
})
