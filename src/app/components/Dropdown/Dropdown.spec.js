import React from 'react'
import faker from 'faker'
import Dropdown from './index'
import { shallow } from 'enzyme'

const NUMBER_ITEM_GENERATED = 20

function generateListItem() {
  return Array.from({ length: NUMBER_ITEM_GENERATED }).map(() => ({
    id: faker.random.number(),
    value: faker.name.jobTitle()
  }))
}

describe('Dropdown', () => {
  let wrapper = null
  let listItems = null
  let updateValue = jest.fn()

  describe('When a list is given', () => {
    listItems = generateListItem()

    beforeEach(() => {
      wrapper = shallow(
        <Dropdown
          value={listItems[0].value}
          list={listItems}
          updateValue={updateValue}
          label='fake label'
          color='red'
        />
      )
    })

    afterEach(() => {
      updateValue.mockRestore()
    })

    it('should contains the correct label', () => {
      expect(wrapper.contains('fake label')).toBeTruthy()
    })

    it('should display all value when clicked', () => {
      let contentItem = null

      contentItem = wrapper.find('[data-test="content-item"]')
      expect(contentItem).toHaveLength(0)

      wrapper.find('[data-test="content"]').simulate('click')

      contentItem = wrapper.find('[data-test="content-item"]')
      expect(contentItem).toHaveLength(NUMBER_ITEM_GENERATED)
    })

    it('should hide all value when a value was clicked', () => {
      let contentItem = null

      wrapper.find('[data-test="content"]').simulate('click')
      wrapper
        .find('[data-test="content-item"]')
        .at(1)
        .simulate('click', { stopPropagation: () => undefined })
      contentItem = wrapper.find('[data-test="content-item"]')
      expect(contentItem).toHaveLength(0)
    })

    it('should display a dot', () => {
      expect(wrapper.find('[data-test="color-dot"]')).toHaveLength(1)
    })

    it('should display the first value of the list', () => {
      expect(
        wrapper.find('[data-test="actual-value"]').contains(listItems[0].value)
      ).toBeTruthy()
    })

    it('should call the function to update the value', () => {
      wrapper.find('[data-test="content"]').simulate('click')
      wrapper
        .find('[data-test="content-item"]')
        .at(1)
        .simulate('click', { stopPropagation: () => undefined })
      expect(updateValue).toBeCalledTimes(1)
    })
  })

  describe("When it's disable", () => {
    let wrapper = null
    let listItems = null
    let updateValue = jest.fn()

    listItems = generateListItem()

    beforeEach(() => {
      wrapper = shallow(
        <Dropdown
          value={listItems[0].value}
          list={listItems}
          updateValue={updateValue}
          label='fake label'
          color='red'
          disable
        />
      )
    })

    afterEach(() => {
      updateValue.mockRestore()
    })

    it('should contains the correct label', () => {
      expect(wrapper.contains('fake label')).toBeTruthy()
    })

    it('should not show the values', () => {
      wrapper.find("[data-test='content']").simulate('click')
      expect(wrapper.find("[data-test='content-item']")).toHaveLength(0)
    })
  })
})
