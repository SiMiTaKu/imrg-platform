import { describe, expect, it } from 'vitest'
import { JUDGE_APPARATUSES, findApparatus, wrapChartLabel } from '@features/judge'

describe('findApparatus', () => {
  describe('正常系', () => {
    it.each([
      ['数値のコード 1 の場合、青のスティックになること', 1, 'blue', false],
      ['文字列のコード "2" の場合、赤のリングになること', '2', 'red', true],
      ['文字列のコード "3" の場合、黄のロープになること', '3', 'yellow', false],
      ['数値のコード 4 の場合、緑のクラブになること', 4, 'green', true],
    ])('%s', (_, code, imageColor, isDouble) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = findApparatus(JUDGE_APPARATUSES, code)
      // #endregion

      // #region Then
      expect(result?.imageColor).toBe(imageColor)
      expect(result?.isDouble).toBe(isDouble)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it.each([
      ['未選択（空文字）の場合、undefined になること', ''],
      ['存在しないコードの場合、undefined になること', 5],
    ])('%s', (_, code) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = findApparatus(JUDGE_APPARATUSES, code)
      // #endregion

      // #region Then
      expect(result).toBeUndefined()
      // #endregion
    })
  })
})

describe('wrapChartLabel', () => {
  describe('正常系', () => {
    it.each([
      ['短い日本語の場合、そのままになること', '美しい姿勢'],
      ['空白を含む 16 文字の日本語の場合、そのままになること', '張り, 活気, 間, アクセント'],
      ['16 文字以下の英語の場合、そのままになること', 'Jump height'],
    ])('%s', (_, label) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = wrapChartLabel(label)
      // #endregion

      // #region Then
      expect(result).toBe(label)
      // #endregion
    })

    it.each([
      [
        '括弧の付いた長い英語の場合、2行になること',
        'Movement technique (natural, wide)',
        ['Movement technique', '(natural, wide)'],
      ],
      [
        '読点を含む長い英語の場合、2行になること',
        'Tension, energy, pauses, accents',
        ['Tension, energy,', 'pauses, accents'],
      ],
      ['20 文字の英語の場合、2行になること', 'Connecting movements', ['Connecting', 'movements']],
    ])('%s', (_, label, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = wrapChartLabel(label)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })
  })
})
