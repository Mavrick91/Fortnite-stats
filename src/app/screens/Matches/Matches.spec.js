import React from 'react'
import { shallow } from 'enzyme'
import Matches from './Matches'
import Card from "../../components/Card";

describe('Matches', () => {
  describe('if has correct data', () => {
    const matches = [0, 0, 0].map(() => ({
      id: 1748801268,
      dateCollected: '2019-06-13T23:58:48.7600000',
      kills: 6,
      matches: 1,
      playlist: 'p2',
      score: 448,
      top1: 0,
      top10: 1,
      top12: 0,
      top25: 1,
      top3: 0,
      top5: 0,
      top6: 0,
      trnRating: 3041.1
    }))
    const props = {
      player: {
        accountId: 'mockId'
      },
      matches,
      fetchAllMatches: jest.fn()
    }
    let wrapper = shallow(<Matches {...props} />)

    it('should render component', () => {
      expect(wrapper.type()).not.toBe(null)
    })

    it('should trigger action to fetch matches', () => {
      expect(props.fetchAllMatches).toHaveBeenCalledTimes(1)
      expect(props.fetchAllMatches).toHaveBeenCalledWith(props.player.accountId)
    })

    it('should display 3 matches', () => {
      expect(wrapper.find(Card).props().content.length).toEqual(3)
    })
  })
  describe('if has no data', () => {
    let wrapper2 = null
    describe('with matches === null', () => {
      it('should return null', () => {
        wrapper2 = shallow(<Matches matches={null} />)
        expect(wrapper2.type()).toBe(null)
      })
    })

    describe('with matches === {}', () => {
      it('should return null', () => {
        wrapper2 = shallow(<Matches matches={{}} />)
        expect(wrapper2.type()).toBe(null)
      })
    })

    describe('with matches === []', () => {
      it('should return null', () => {
        wrapper2 = shallow(<Matches matches={[]} />)
        expect(wrapper2.type()).toBe(null)
      })
    })

    describe('with matches === undefined', () => {
      it('should return null', () => {
        wrapper2 = shallow(<Matches matches={undefined} />)
        expect(wrapper2.type()).toBe(null)
      })
    })
  })
})
