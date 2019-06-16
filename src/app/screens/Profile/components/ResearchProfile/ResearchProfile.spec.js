import React from 'react'
import { shallow } from 'enzyme'
import ResearchProfile from './ResearchProfile'

describe('ResearchProfile', () => {
  const handleSubmit = jest.fn()
  const wrapper = shallow(<ResearchProfile handleSubmit={handleSubmit} />)

  it('should render component', () => {
    expect(wrapper.type()).not.toBe(null)
  })

  it('should have a Form', () => {
    expect(wrapper.find('Form')).toHaveLength(1)
  })

  it('should call the function handleSubmit', () => {
    wrapper.find('Form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
