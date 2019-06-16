import React from 'react'
import { shallow } from 'enzyme'
import Profile from './Profile'
import ResearchProfile from './components/ResearchProfile'
import InfoProfile from './components/InfoProfile'
import NavProfile from './components/NavProfile'
import Matches from '../Matches'
import Overview from '../Overview'

describe('Profile', () => {
  describe('when no player', () => {
    const wrapper = shallow(<Profile />)

    it('should render the component', () => {
      expect(wrapper.type()).not.toBe(null)
    })

    it('should render ResearchProfile component', () => {
      expect(wrapper.find(ResearchProfile)).toHaveLength(1)
    })

    it('should not render InfoProfile component', () => {
      expect(wrapper.find(InfoProfile)).toHaveLength(0)
    })
  })

  describe('when player populated', () => {
    const wrapper2 = shallow(<Profile player={{}} />)

    it('should render the component', () => {
      expect(wrapper2.type()).not.toBe(null)
    })

    it('should render InfoProfile component', () => {
      expect(wrapper2.find(InfoProfile)).toHaveLength(1)
    })

    it('should render NavProfile component', () => {
      expect(wrapper2.find(NavProfile)).toHaveLength(1)
    })

    describe('when activeNav is set', () => {
      describe('activeNav === OVERVIEW', () => {
        const wrapper3 = shallow(<Profile player={{}} activeNav='OVERVIEW' />)
        it('should render component Overview', () => {
          expect(wrapper3.find(Overview)).toHaveLength(1)
        })
      })
      describe('activeNav === MATCHES', () => {
        const wrapper4 = shallow(<Profile player={{}} activeNav='MATCHES' />)
        it('should render component Matches', () => {
          expect(wrapper4.find(Matches)).toHaveLength(1)
        })
      })
    })
  })
})
