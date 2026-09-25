import { describe, expect, it } from 'vitest'
import { fingerprint, isFresh } from '@entities/rule'
import type { RuleEntry } from '@entities/rule'

describe('fingerprint', () => {
  describe('正常系', () => {
    it('同じ中身の場合、同じ指紋になること', () => {
      // #region Given
      const a: RuleEntry = { title: '審判団', lead: '原則として上級審判員を置く' }
      const b: RuleEntry = { title: '審判団', lead: '原則として上級審判員を置く' }
      // #endregion

      // #region When
      const result = fingerprint(a) === fingerprint(b)
      // #endregion

      // #region Then
      expect(result).toBe(true)
      // #endregion
    })

    it('見出しだけ変えた場合、別の指紋になること', () => {
      // #region Given
      const before: RuleEntry = { title: '審判団', lead: '同じ本文' }
      const after: RuleEntry = { title: '審判団の構成', lead: '同じ本文' }
      // #endregion

      // #region When
      const result = fingerprint(before) === fingerprint(after)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })

    it('項目の番号だけ変えた場合、別の指紋になること', () => {
      // #region Given
      const before: RuleEntry = { title: '同じ', items: [{ label: '1', text: '同じ本文' }] }
      const after: RuleEntry = { title: '同じ', items: [{ label: '2', text: '同じ本文' }] }
      // #endregion

      // #region When
      const result = fingerprint(before) === fingerprint(after)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })

    it('入れ子の項目を変えた場合、別の指紋になること', () => {
      // #region Given
      const before: RuleEntry = {
        title: '同じ',
        items: [{ label: '1', text: '親', items: [{ text: '子' }] }],
      }
      const after: RuleEntry = {
        title: '同じ',
        items: [{ label: '1', text: '親', items: [{ text: '別の子' }] }],
      }
      // #endregion

      // #region When
      const result = fingerprint(before) === fingerprint(after)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })
  })
})

describe('isFresh', () => {
  describe('正常系', () => {
    it('訳が今の日本語の指紋を持つ場合、追いついていると判定すること', () => {
      // #region Given
      const japanese: RuleEntry = { title: '審判団', lead: '本文' }
      const translated: RuleEntry = { title: 'Judging Panel', from: fingerprint(japanese) }
      // #endregion

      // #region When
      const result = isFresh(japanese, translated)
      // #endregion

      // #region Then
      expect(result).toBe(true)
      // #endregion
    })

    it('訳したあとに日本語を直した場合、追いついていないと判定すること', () => {
      // #region Given
      const before: RuleEntry = { title: '審判団', lead: '古い本文' }
      const translated: RuleEntry = { title: 'Judging Panel', from: fingerprint(before) }
      const after: RuleEntry = { title: '審判団', lead: '直したあとの本文' }
      // #endregion

      // #region When
      const result = isFresh(after, translated)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })

    it('訳がまだ無い場合、追いついていないと判定すること', () => {
      // #region Given
      const japanese: RuleEntry = { title: '審判団', lead: '本文' }
      // #endregion

      // #region When
      const result = isFresh(japanese, undefined)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })

    it('指紋を持たない訳の場合、追いついていないと判定すること', () => {
      // #region Given
      const japanese: RuleEntry = { title: '審判団', lead: '本文' }
      const translated: RuleEntry = { title: 'Judging Panel' }
      // #endregion

      // #region When
      const result = isFresh(japanese, translated)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })
  })
})
