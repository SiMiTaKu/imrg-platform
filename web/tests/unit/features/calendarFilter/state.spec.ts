import { describe, expect, it } from 'vitest'
import { defaultState, parseState, serializeState } from '@features/calendarFilter/lib/state'
import type { CalendarState } from '@features/calendarFilter'

describe('serializeState', () => {
  describe('正常系', () => {
    it('種類を複数選んだ場合、まとめて書き出され、読み戻すと同じ状態になること', () => {
      // #region Given
      const state: CalendarState = {
        ...defaultState('2026-09'),
        categories: ['national', 'regional'],
      }
      // #endregion

      // #region When
      const query = serializeState(state, '2026-09')
      // #endregion

      // #region Then
      expect(query).toBe('?category=national%2Cregional')
      expect(parseState(query, '2026-09')).toEqual(state)
      // #endregion
    })
  })

  describe('境界値', () => {
    it('初期値のままの場合、クエリが空になること', () => {
      // #region Given
      const state = defaultState('2026-09')
      // #endregion

      // #region When
      const query = serializeState(state, '2026-09')
      // #endregion

      // #region Then
      expect(query).toBe('')
      // #endregion
    })
  })
})

describe('parseState', () => {
  describe('正常系', () => {
    it.each<[string, CalendarState]>([
      [
        '表示・キーワード・種類・期間・ページを書き出した場合、読み戻すと同じ状態になること',
        {
          ...defaultState('2026-09'),
          view: 'list',
          keyword: '全日本',
          categories: ['national'],
          period: 'past',
          page: 3,
        },
      ],
      [
        'カレンダーの月と日を書き出した場合、読み戻すと同じ状態になること',
        { ...defaultState('2026-09'), month: '2026-11', day: '2026-11-15' },
      ],
    ])('%s', (_, state) => {
      // #region Given
      const query = serializeState(state, '2026-09')
      // #endregion

      // #region When
      const result = parseState(query, '2026-09')
      // #endregion

      // #region Then
      expect(result).toEqual(state)
      // #endregion
    })
  })

  describe('異常系', () => {
    it('おかしな値が渡された場合、初期値になること', () => {
      // #region Given
      const query = '?view=grid&category=unknown&period=later&page=-2&month=2026-1&day=2026-12-01'
      // #endregion

      // #region When
      const result = parseState(query, '2026-09')
      // #endregion

      // #region Then
      expect(result).toEqual(defaultState('2026-09'))
      // #endregion
    })
  })
})
