import { describe, expect, it } from 'vitest'
import {
  POINT_A_OPTIONS,
  POINT_B_SCALE_ITEMS,
  createExecutionDeduct,
  getAmountOfPointA,
  getAmountOfPointB,
  getAmountOfScaleFaults,
  getDecisionPoints,
  getDeductionOfDroppedApparatus,
  getDeductionOfPointBItem,
  getDeductionOfScale,
  getMaxPointB,
  isPointBAnswered,
  type ExecutionDeduct,
  type PointAOption,
  type PointBScaleCode,
  type PointBScaleKey,
} from '@features/judge'

/**
 * テスト用の採点項目を作る
 * @param options - Aの全項目に入れる選択肢と、Bの入力値
 * @returns 採点項目
 */
const makeDeduct = ({
  option = POINT_A_OPTIONS[0],
  drops = 0,
  scales = {},
}: {
  option?: PointAOption
  drops?: number
  scales?: Partial<Record<PointBScaleKey, PointBScaleCode>>
}): ExecutionDeduct => {
  const base = createExecutionDeduct()
  const pointA = Object.fromEntries(
    Object.keys(base.pointA).map((key) => [key, option]),
  ) as ExecutionDeduct['pointA']
  return { pointA, pointB: { drops, scales } }
}

/**
 * Bの設問すべてに同じ段階で答えた入力値を作る
 * @param code - 答える段階
 * @returns 設問ごとの答え
 */
const answerAll = (code: PointBScaleCode): Partial<Record<PointBScaleKey, PointBScaleCode>> =>
  Object.fromEntries(POINT_B_SCALE_ITEMS.map((item) => [item.key, code]))

describe('createExecutionDeduct', () => {
  // #region 正常系
  describe('正常系', () => {
    it('作った場合、Aは先頭の選択肢・Bは未回答になること', () => {
      // #region When
      const result = createExecutionDeduct()
      // #endregion

      // #region Then
      expect(Object.values(result.pointA).every((option) => option === POINT_A_OPTIONS[0])).toBe(
        true,
      )
      expect(result.pointB.drops).toBe(0)
      expect(result.pointB.scales).toEqual({})
      // #endregion
    })
  })
  // #endregion
})

describe('getAmountOfPointA', () => {
  // #region 正常系
  describe('正常系', () => {
    it('全項目に5点を付けた場合、減点なしになること', () => {
      // #region Given
      const data = makeDeduct({ option: POINT_A_OPTIONS[4] })
      // #endregion

      // #region When
      const result = getAmountOfPointA(data)
      // #endregion

      // #region Then
      expect(result).toBe(0)
      // #endregion
    })

    it('全項目に1点を付けた場合、その減点の11倍になること', () => {
      // #region Given
      const data = makeDeduct({ option: POINT_A_OPTIONS[0] })
      // #endregion

      // #region When
      const result = getAmountOfPointA(data)
      // #endregion

      // #region Then
      expect(result).toBe(4.4)
      // #endregion
    })
  })
  // #endregion
})

describe('getDeductionOfScale', () => {
  // #region 正常系
  describe('正常系', () => {
    it.each([
      ['5点なら減点なしになること', 5, 1, 0],
      ['4点なら 0.3 になること', 4, 1, 0.3],
      ['1点なら 1.2 になること', 1, 1, 1.2],
      ['重み3で4点なら 0.9 になること', 4, 3, 0.9],
      ['重み2で1点なら 2.4 になること', 1, 2, 2.4],
    ] as const)('%s', (_, code, weight, expected) => {
      // #region When
      const result = getDeductionOfScale(code, weight)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })

    it('まだ答えていない場合、減点なしになること', () => {
      // #region When
      const result = getDeductionOfScale(undefined, 3)
      // #endregion

      // #region Then
      expect(result).toBe(0)
      // #endregion
    })
  })
  // #endregion
})

describe('getDeductionOfPointBItem', () => {
  // #region 正常系
  describe('正常系', () => {
    it('重みの無い設問は、4点で 0.3 になること', () => {
      // #region Given
      const data = makeDeduct({ scales: { throwCatch: 4 } })
      // #endregion

      // #region When
      const result = getDeductionOfPointBItem(data, 'throwCatch')
      // #endregion

      // #region Then
      expect(result).toBe(0.3)
      // #endregion
    })

    it('着地は重みが2なので、4点で 0.6 になること', () => {
      // #region Given
      const data = makeDeduct({ scales: { landing: 4 } })
      // #endregion

      // #region When
      const result = getDeductionOfPointBItem(data, 'landing')
      // #endregion

      // #region Then
      expect(result).toBe(0.6)
      // #endregion
    })
  })
  // #endregion
})

describe('getDeductionOfDroppedApparatus', () => {
  // #region 正常系
  describe('正常系', () => {
    it.each([
      ['落としていない場合、0 になること', 0, 0],
      ['1回落とした場合、0.3 になること', 1, 0.3],
      ['3回落とした場合、0.9 になること', 3, 0.9],
    ] as const)('%s', (_, drops, expected) => {
      // #region Given
      const data = makeDeduct({ drops })
      // #endregion

      // #region When
      const result = getDeductionOfDroppedApparatus(data)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
  // #endregion
})

describe('getAmountOfScaleFaults', () => {
  // #region 正常系
  describe('正常系', () => {
    it('すべて5点なら減点なしになること', () => {
      // #region Given
      const data = makeDeduct({ scales: answerAll(5) })
      // #endregion

      // #region When
      const result = getAmountOfScaleFaults(data)
      // #endregion

      // #region Then
      expect(result).toBe(0)
      // #endregion
    })

    it('すべて4点なら、重みの合計ぶんになること', () => {
      // #region Given
      const data = makeDeduct({ scales: answerAll(4) })
      const weights = POINT_B_SCALE_ITEMS.reduce((sum, item) => sum + item.weight, 0)
      // #endregion

      // #region When
      const result = getAmountOfScaleFaults(data)
      // #endregion

      // #region Then
      expect(result).toBe(Math.round(weights * 0.3 * 100) / 100)
      // #endregion
    })
  })
  // #endregion
})

describe('getAmountOfPointB', () => {
  // #region 正常系
  describe('正常系', () => {
    it('落下と設問の減点を足した値になること', () => {
      // #region Given
      const data = makeDeduct({ option: POINT_A_OPTIONS[0], drops: 1, scales: { legLine: 4 } })
      // #endregion

      // #region When
      const result = getAmountOfPointB(data)
      // #endregion

      // #region Then
      expect(result).toBe(0.6)
      // #endregion
    })

    it('上限を超えた場合、上限で止まること', () => {
      // #region Given
      const data = makeDeduct({ option: POINT_A_OPTIONS[0], drops: 100, scales: answerAll(1) })
      // #endregion

      // #region When
      const result = getAmountOfPointB(data)
      // #endregion

      // #region Then
      expect(result).toBe(getMaxPointB(data))
      // #endregion
    })
  })
  // #endregion
})

describe('getDecisionPoints', () => {
  // #region 正常系
  describe('正常系', () => {
    it('減点が無い場合、満点になること', () => {
      // #region Given
      const data = makeDeduct({ option: POINT_A_OPTIONS[4], scales: answerAll(5) })
      // #endregion

      // #region When
      const result = getDecisionPoints(data)
      // #endregion

      // #region Then
      expect(result).toBe(10)
      // #endregion
    })

    it('AとBの減点を満点から引いた値になること', () => {
      // #region Given
      const data = makeDeduct({ option: POINT_A_OPTIONS[0], drops: 1, scales: { legLine: 4 } })
      // #endregion

      // #region When
      const result = getDecisionPoints(data)
      // #endregion

      // #region Then
      expect(result).toBe(10 - 4.4 - 0.6)
      // #endregion
    })
  })
  // #endregion
})

describe('isPointBAnswered', () => {
  // #region 正常系
  describe('正常系', () => {
    it('すべての設問に答えた場合、true になること', () => {
      // #region Given
      const data = makeDeduct({ scales: answerAll(3) })
      // #endregion

      // #region When
      const result = isPointBAnswered(data)
      // #endregion

      // #region Then
      expect(result).toBe(true)
      // #endregion
    })

    it('答えていない設問がある場合、false になること', () => {
      // #region Given
      const data = makeDeduct({ scales: { legLine: 3 } })
      // #endregion

      // #region When
      const result = isPointBAnswered(data)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })
  })
  // #endregion
})

describe('POINT_B_SCALE_ITEMS', () => {
  // #region 正常系
  describe('正常系', () => {
    it('設問が8つあること', () => {
      // #region When
      const result = POINT_B_SCALE_ITEMS.length
      // #endregion

      // #region Then
      expect(result).toBe(8)
      // #endregion
    })

    it('キーが重なっていないこと', () => {
      // #region When
      const result = new Set(POINT_B_SCALE_ITEMS.map((item) => item.key)).size
      // #endregion

      // #region Then
      expect(result).toBe(POINT_B_SCALE_ITEMS.length)
      // #endregion
    })
  })
  // #endregion
})
