import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { GET_INFO_PLAYER_REQUEST } from 'app/services/profile/reducer'
import withPlayer from './withPlayer'

const DumbComponent = () => <div>My Component</div>
const mockStore = configureStore()
const Component = withPlayer(DumbComponent)
const expectedActions = payload => [
  {
    type: GET_INFO_PLAYER_REQUEST,
    payload,
    requestName: GET_INFO_PLAYER_REQUEST
  }
]

describe('withPlayer', () => {
  describe('empty player reducer', () => {
    const store = mockStore()

    describe('if params are provided', () => {
      let wrapper = null
      const username = 'maurice'
      const platform = 'ps4'
      const props = {
        match: {
          params: {
            username,
            platform
          }
        }
      }

      beforeEach(() => {
        store.clearActions()

        wrapper = shallow(<Component {...props} store={store} />)
          .childAt(0)
          .dive()
      })

      it('should render component', () => {
        expect(wrapper.type()).not.toBe(null)
      })

      it('should trigger action', () => {
        expect(store.getActions()).toEqual(
          expectedActions({ username, platform })
        )
      })
    })

    describe('if params are not provided', () => {
      let wrapper2 = null

      beforeEach(() => {
        store.clearActions()

        wrapper2 = shallow(<Component store={store} />)
          .childAt(0)
          .dive()
      })

      it('should not trigger action', () => {
        expect(store.getActions()).toEqual([])
      })

      describe('if right params are updated', () => {
        it('should trigger action', () => {
          const platform = 'pc'
          const username = 'ninja'

          wrapper2.setProps({ match: { params: { username, platform } } })
          expect(store.getActions()).toEqual(
            expectedActions({ username, platform })
          )
        })
      })
    })
  })

  describe('populated player reducer', () => {
    let wrapper3 = null
    const username = 'maurice'
    const platform = 'ps4'
    const store2 = mockStore({
      player: {
        epicUserHandle: username
      }
    })
    const props = {
      match: {
        params: {
          username,
          platform
        }
      }
    }
    beforeEach(() => {
      wrapper3 = shallow(<Component {...props} store={store2} />)
        .childAt(0)
        .dive()
      store2.clearActions()
    })

    describe('if params are updated', () => {
      describe("if it's same params", () => {
        it('should not trigger action', () => {
          wrapper3.setProps({ match: { params: { username, platform } } })
          expect(store2.getActions()).toEqual([])
        })
      })

      describe("if it's different params", () => {
        it('should trigger action', () => {
          wrapper3.setProps({ match: { params: { username: 'changed', platform } } })
          expect(store2.getActions()).toEqual(
            expectedActions({ username: 'changed', platform })
          )
          store2.clearActions()
          wrapper3.setProps({ match: { params: { username, platform: 'changed' } } })
          expect(store2.getActions()).toEqual(
            expectedActions({ username, platform: 'changed' })
          )
        })
      })
    })

    describe('if wrong params are updated', () => {})
  })
})
