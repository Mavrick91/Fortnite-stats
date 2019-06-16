import { getInfoMatch, getFormattedTitle, getInfoRight } from './infoRowMatch'

const topMatch = {
  id: 1743281684,
  dateCollected: '2019-06-10T21:49:58.9130000',
  kills: 2,
  matches: 1,
  playlist: 'p2',
  score: 185,
  top1: 0,
  top10: 0,
  top12: 0,
  top25: 1,
  top3: 0,
  top5: 0,
  top6: 0,
  trnRating: 2987
}

const winMatch = {
  id: 1748765934,
  accountId: '4735ce91-3292-4caf-8a5b-17789b40f79c',
  playlist: 'p9',
  kills: 12,
  minutesPlayed: 0,
  top1: 1,
  top5: 0,
  top6: 0,
  top10: 1,
  top12: 0,
  top25: 1,
  matches: 1,
  top3: 0,
  dateCollected: '2019-06-13T23:28:56.71',
  score: 825,
  platform: 3,
  trnRating: 3101.8,
  trnRatingChange: 99.905
}

const defeatMatch = {
  id: 1748796713,
  accountId: '4735ce91-3292-4caf-8a5b-17789b40f79c',
  playlist: 'p10',
  kills: 1,
  minutesPlayed: 0,
  top1: 0,
  top5: 0,
  top6: 0,
  top10: 0,
  top12: 0,
  top25: 0,
  matches: 1,
  top3: 0,
  dateCollected: '2019-06-13T23:55:22.877',
  score: 96,
  platform: 3,
  trnRating: 2996,
  trnRatingChange: -53.636
}

describe('infoRowMatch', () => {
  describe('getInfoRight', () => {
    describe('if lose match', () => {
      it('should return the correct object', () => {
        const result = getInfoRight(defeatMatch)

        expect(result).toEqual({
          kills: 1,
          mode: 'DUO',
          score: '+96'
        })
      })
    })
    describe('if top match', () => {
      it('should return the correct object', () => {
        const result = getInfoRight(topMatch)

        expect(result).toEqual({ kills: 2, mode: 'SOLO', score: '+185' })
      })
    })
    describe('if win match', () => {
      it('should return the correct object', () => {
        const result = getInfoRight(winMatch)

        expect(result).toEqual({
          mode: 'SQUAD',
          score: `+825`,
          kills: 12
        })
      })
    })
  })
  describe('getFormattedTitle', () => {
    describe('if all params are provided', () => {
      it('should return the correct title formatted', () => {
        const result1 = getFormattedTitle('top13', false)
        const result2 = getFormattedTitle('top13', true)
        const result3 = getFormattedTitle('t313', true)
        const result4 = getFormattedTitle('t313', false)

        expect(result1).toEqual('TOP 13')
        expect(result2).toEqual('WINNER!')
        expect(result3).toEqual('WINNER!')
        expect(result4).toEqual('DEFEAT')
      })
    })
    describe('if no params are provided', () => {
      it('should return the correct title formatted', () => {
        const result1 = getFormattedTitle()

        expect(result1).toEqual('DEFEAT')
      })
    })
    describe('if only first param is provided', () => {
      it('should return the correct title formatted', () => {
        const result1 = getFormattedTitle('top123')
        const result2 = getFormattedTitle('papa')

        expect(result1).toEqual('TOP 123')
        expect(result2).toEqual('DEFEAT')
      })
    })
    describe('if only last param is provided', () => {
      it('should return the correct title formatted', () => {
        const result1 = getFormattedTitle(null, false)
        const result2 = getFormattedTitle(null, true)

        expect(result1).toEqual('DEFEAT')
        expect(result2).toEqual('WINNER!')
      })
    })
  })
  describe('getInfoMatch', () => {
    describe('if lose match', () => {
      describe('getInfoMatch', () => {
        const { isWin, title, infoRight, top } = getInfoMatch(defeatMatch)

        it('should have win false', () => {
          expect(isWin).toBe(false)
        })

        it('should have the correct title', () => {
          expect(title).toEqual('DEFEAT')
        })

        it('should have the correct top', () => {
          expect(top).toBe(false)
        })

        it('should have the correct info right', () => {
          const { mode, score, kills } = infoRight

          expect(mode).toEqual('DUO')
          expect(score).toEqual('+96')
          expect(kills).toEqual(1)
        })
      })
    })

    describe('if win match', () => {
      describe('getInfoMatch', () => {
        const { isWin, title, infoRight, top } = getInfoMatch(winMatch)

        it('should have win false', () => {
          expect(isWin).toBe(true)
        })

        it('should have the correct title', () => {
          expect(title).toEqual('WINNER!')
        })

        it('should have the correct top', () => {
          expect(top).toBe(true)
        })

        it('should have the correct info right', () => {
          const { mode, score, kills } = infoRight

          expect(mode).toEqual('SQUAD')
          expect(score).toEqual('+825')
          expect(kills).toEqual(12)
        })
      })
    })

    describe('if top match', () => {
      describe('getInfoMatch', () => {
        const { isWin, title, infoRight, top } = getInfoMatch(topMatch)

        it('should have win false', () => {
          expect(isWin).toBe(false)
        })

        it('should have the correct title', () => {
          expect(title).toEqual('TOP 25')
        })

        it('should have the correct top', () => {
          expect(top).toBe(true)
        })

        it('should have the correct info right', () => {
          const { mode, score, kills } = infoRight

          expect(mode).toEqual('SOLO')
          expect(score).toEqual('+185')
          expect(kills).toEqual(2)
        })
      })
    })
  })
})
