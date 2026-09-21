import { describe, expect, it } from 'vitest'
import {
  POINT_A_FINE_OPTIONS,
  POINT_A_OPTIONS,
  POINT_B_ITEMS,
  createExecutionDeduct,
  getAmountOfCountedFaults,
  getAmountOfPointA,
  getAmountOfPointB,
  getDecisionPoints,
  getDeductionOfDroppedApparatus,
  getMaxPointB,
  normalizeMiss,
  type ExecutionDeduct,
  type PointAOption,
} from '@features/judge'

/**
 * テスト用の採点項目を作る
 * @param options - Aの全項目に入れる選択肢と、Bの入力値
 * @returns 採点項目
 */
const makeDeduct = ({
  option = POINT_A_OPTIONS[0],
  single = 0,
  double = 0,
  miss = 0,
}: {
  option?: PointAOption
  single?: number
  double?: number
  miss?: number
}): ExecutionDeduct => {
  const base = createExecutionDeduct()
  const pointA = Object.fromEntries(
    Object.keys(base.pointA).map((key) => [key, option]),
  ) as ExecutionDeduct['pointA']
  const counts = { ...base.pointB.counts, droppedSingle: single, droppedDouble: double }
  return { pointA, pointB: { counts, miss } }
}

/**
 * 選択肢のコードから選択肢を返す
 * @param code - 選択肢のコード（規則の5段階は 1〜5。0.05 刻みの補助は 1.5〜5.5）
 * @returns 選択肢
 */
const optionOf = (code: number): PointAOption => {
  const option = [...POINT_A_OPTIONS, ...POINT_A_FINE_OPTIONS].find(
    (candidate) => candidate.code === code,
  )
  if (!option) throw new Error(`選択肢 ${code} がありません`)
  return option
}

describe('POINT_A_OPTIONS', () => {
  describe('正常系', () => {
    it('規則の実施欠点基準どおり、0.50 から 0.10 までの5段階になっていること', () => {
      // #region Given
      // 定数そのものを見る
      // #endregion

      // #region When
      const result = POINT_A_OPTIONS.map((option) => option.value)
      // #endregion

      // #region Then
      expect(result).toEqual([0.5, 0.4, 0.3, 0.2, 0.1])
      // #endregion
    })

    it('補助の選択肢が、段階の間を 0.05 刻みで埋めていること', () => {
      // #region Given
      // 定数そのものを見る
      // #endregion

      // #region When
      const result = POINT_A_FINE_OPTIONS.map((option) => option.value)
      // #endregion

      // #region Then
      expect(result).toEqual([0.45, 0.35, 0.25, 0.15, 0.05])
      // #endregion
    })
  })
})

describe('createExecutionDeduct', () => {
  describe('正常系', () => {
    it('作った場合、Aの11項目が先頭の選択肢で、Bがすべて 0 になること', () => {
      // #region Given
      // 引数なし
      // #endregion

      // #region When
      const result = createExecutionDeduct()
      // #endregion

      // #region Then
      expect(Object.keys(result.pointA)).toHaveLength(11)
      expect(Object.values(result.pointA).every((option) => option.code === 1)).toBe(true)
      expect(Object.values(result.pointB.counts).every((count) => count === 0)).toBe(true)
      expect(Object.keys(result.pointB.counts)).toHaveLength(POINT_B_ITEMS.length)
      expect(result.pointB.miss).toBe(0)
      // #endregion
    })
  })
})

describe('getAmountOfPointA', () => {
  describe('正常系', () => {
    it.each([
      ['全項目が 0.5 の場合、5.5 になること', 1, 5.5],
      ['全項目が 0.45 の場合、小数の誤差なく 4.95 になること', 1.5, 4.95],
      ['全項目が 0.35 の場合、小数の誤差なく 3.85 になること', 2.5, 3.85],
      ['全項目が 0.05 の場合、小数の誤差なく 0.55 になること', 5.5, 0.55],
    ])('%s', (_, code, expected) => {
      // #region Given
      const data = makeDeduct({ option: optionOf(code) })
      // #endregion

      // #region When
      const result = getAmountOfPointA(data)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('getDeductionOfDroppedApparatus', () => {
  describe('正常系', () => {
    it.each([
      ['落としていない場合、0 になること', 0, 0, 0],
      ['1つの手具を1回落とした場合、0.3 になること', 1, 0, 0.3],
      ['2つの手具を同時に1回落とした場合、0.4 になること', 0, 1, 0.4],
      ['1つを2回と2つ同時を1回落とした場合、1.0 になること', 2, 1, 1.0],
    ])('%s', (_, single, double, expected) => {
      // #region Given
      const data = makeDeduct({ single, double })
      // #endregion

      // #region When
      const result = getDeductionOfDroppedApparatus(data)
      // #endregion

      // #region Then
      expect(result).toBeCloseTo(expected, 10)
      // #endregion
    })
  })
})

describe('getAmountOfCountedFaults', () => {
  describe('正常系', () => {
    it('区分の違う欠点を数えた場合、小数の誤差なく合計になること', () => {
      // #region Given
      const base = makeDeduct({ single: 1 })
      const data: ExecutionDeduct = {
        ...base,
        pointB: {
          ...base.pointB,
          // 手具の技術 0.05 ×2、転回系 0.30 ×1、その他 0.10 ×3、音楽 0.10 ×1
          counts: {
            ...base.pointB.counts,
            catchPlaceChanged: 2,
            landingFall: 1,
            stagger: 3,
            musicRhythm: 1,
          },
        },
      }
      // #endregion

      // #region When
      const result = getAmountOfCountedFaults(data)
      // #endregion

      // #region Then
      // 落下 0.30 + 0.10 + 0.30 + 0.30 + 0.10
      expect(result).toBe(1.1)
      // #endregion
    })
  })
})

describe('POINT_B_ITEMS', () => {
  describe('正常系', () => {
    it('規則の実施欠点表どおり、数える欠点が 26 項目あること', () => {
      // #region Given
      // 定数そのものを見る
      // #endregion

      // #region When
      const result = POINT_B_ITEMS.length
      // #endregion

      // #region Then
      expect(result).toBe(26)
      // #endregion
    })

    it('項目のキーが重複していないこと', () => {
      // #region Given
      // 定数そのものを見る
      // #endregion

      // #region When
      const result = new Set(POINT_B_ITEMS.map((item) => item.key)).size
      // #endregion

      // #region Then
      expect(result).toBe(POINT_B_ITEMS.length)
      // #endregion
    })
  })
})

describe('getMaxPointB', () => {
  describe('正常系', () => {
    it('Aの減点が 5.5 の場合、上限が 4.5 になること', () => {
      // #region Given
      const data = makeDeduct({ option: optionOf(1) })
      // #endregion

      // #region When
      const result = getMaxPointB(data)
      // #endregion

      // #region Then
      expect(result).toBe(4.5)
      // #endregion
    })
  })
})

describe('getAmountOfPointB', () => {
  describe('正常系', () => {
    it('落下とミスがある場合、その合計になること', () => {
      // #region Given
      const data = makeDeduct({ single: 1, double: 1, miss: 0.1 })
      // #endregion

      // #region When
      const result = getAmountOfPointB(data)
      // #endregion

      // #region Then
      expect(result).toBeCloseTo(0.8, 10)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it.each([
      ['合計が上限を超える場合、上限の値になること', 20],
      ['合計が上限と同じ場合、上限の値になること', 15],
    ])('%s', (_, single) => {
      // #region Given
      // Aの減点は 5.5 なので、上限は 4.5（1つの手具の落下 15 回でちょうど 4.5）
      const data = makeDeduct({ option: optionOf(1), single })
      // #endregion

      // #region When
      const result = getAmountOfPointB(data)
      // #endregion

      // #region Then
      expect(result).toBe(4.5)
      // #endregion
    })
  })

  describe('異常系', () => {
    it('その他ミスによる減点が 0 未満の場合、例外になること', () => {
      // #region Given
      const data = makeDeduct({ miss: -0.1 })
      // #endregion

      // #region When
      const act = () => getAmountOfPointB(data)
      // #endregion

      // #region Then
      expect(act).toThrow(Error)
      // #endregion
    })
  })
})

describe('getDecisionPoints', () => {
  describe('正常系', () => {
    it.each([
      ['減点が最小で落下とミスが無い場合、9.45 になること', 5.5, 0, 0, 0, 9.45],
      ['Aが 0.55 で落下 1 回とミス 0.2 の場合、8.95 になること', 5.5, 1, 0, 0.2, 8.95],
      ['Aが 5.5 の場合、4.5 になること', 1, 0, 0, 0, 4.5],
    ])('%s', (_, code, single, double, miss, expected) => {
      // #region Given
      const data = makeDeduct({ option: optionOf(code), single, double, miss })
      // #endregion

      // #region When
      const result = getDecisionPoints(data)
      // #endregion

      // #region Then
      expect(result).toBeCloseTo(expected, 10)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('Bの減点が上限を超える場合、0 になること', () => {
      // #region Given
      const data = makeDeduct({ option: optionOf(1), single: 100 })
      // #endregion

      // #region When
      const result = getDecisionPoints(data)
      // #endregion

      // #region Then
      expect(result).toBe(0)
      // #endregion
    })
  })
})

describe('normalizeMiss', () => {
  describe('正常系', () => {
    it.each([
      ['0 の場合、0 になること', 0, 0],
      ['0.15 の場合、そのままになること', 0.15, 0.15],
    ])('%s', (_, value, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = normalizeMiss(value)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it.each([
      ['空欄（NaN）の場合、0 になること', Number.NaN],
      ['0 未満の場合、0 になること', -0.3],
    ])('%s', (_, value) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = normalizeMiss(value)
      // #endregion

      // #region Then
      expect(result).toBe(0)
      // #endregion
    })
  })
})
