import { formatNumber } from './index'

describe('Utils function', () => {
  describe('formatNumber', () => {
    it('should return 0', () => {
      expect(formatNumber()).toEqual('0')
      expect(formatNumber(null)).toEqual('0')
      expect(formatNumber(undefined)).toEqual('0')
      expect(formatNumber('test')).toEqual('0')
      expect(formatNumber('123test')).toEqual('0')
    })

    it('should return number formatted', () => {
      expect(formatNumber(1234)).toEqual('1,234')
      expect(formatNumber('1234')).toEqual('1,234')
      expect(formatNumber('123123')).toEqual('123,123')
      expect(formatNumber('123123123')).toEqual('123,123,123')
      expect(formatNumber('123123123123')).toEqual('123,123,123,123')
    })
  })
})
