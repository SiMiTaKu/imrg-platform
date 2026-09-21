import { describe, expect, it } from 'vitest'
import { RULE_JA } from '@entities/rule/api/content/ja'
import { RULE_STRUCTURE } from '@entities/rule/api/structure'
import type { RuleNode } from '@entities/rule'

/**
 * 骨格を平らにして、鍵を順に並べる
 * @param nodes - 節点
 * @returns 鍵の一覧
 */
const collectKeys = (nodes: readonly RuleNode[]): string[] =>
  nodes.flatMap((node) => [node.key, ...collectKeys(node.children ?? [])])

const structureKeys = collectKeys(RULE_STRUCTURE)
const contentKeys = Object.keys(RULE_JA)

describe('規則の骨格と本文', () => {
  describe('正常系', () => {
    it('骨格のすべての節点に、日本語の本文があること', () => {
      // #region Given
      const missing = structureKeys.filter((key) => !(key in RULE_JA))
      // #endregion

      // #region Then
      expect(missing).toEqual([])
      // #endregion
    })

    it('日本語の本文に、骨格の無い迷子が無いこと', () => {
      // #region Given
      const orphans = contentKeys.filter((key) => !structureKeys.includes(key))
      // #endregion

      // #region Then
      expect(orphans).toEqual([])
      // #endregion
    })

    it('鍵が重なっていないこと', () => {
      // #region Given
      const duplicated = structureKeys.filter((key, index) => structureKeys.indexOf(key) !== index)
      // #endregion

      // #region Then
      expect(duplicated).toEqual([])
      // #endregion
    })

    it('冊子のとおり5章であること', () => {
      // #region When
      const result = RULE_STRUCTURE.length
      // #endregion

      // #region Then
      expect(result).toBe(5)
      // #endregion
    })

    it('2章が「新体操の特性とその基本」であること', () => {
      // #region When
      const result = RULE_JA[RULE_STRUCTURE[1].key].title
      // #endregion

      // #region Then
      expect(result).toBe('新体操の特性とその基本')
      // #endregion
    })
  })
})
