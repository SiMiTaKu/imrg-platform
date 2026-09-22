import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  findRuleSeating,
  findRuleShapeFigure,
  findRuleTable,
  findRuleTree,
} from '@entities/rule/api/tables'
import { RULE_STRUCTURE } from '@entities/rule/api/structure'
import type { RuleNode } from '@entities/rule'

/**
 * 骨格を平らにして、載せている図や表の鍵を集める
 * @param nodes - 節点
 * @returns 図や表の鍵の一覧
 */
const collectFigures = (nodes: readonly RuleNode[]): string[] =>
  nodes.flatMap((node) => [
    ...(node.figures ?? []).map((figure) => (typeof figure === 'string' ? figure : figure.figure)),
    ...collectFigures(node.children ?? []),
  ])

const figures = collectFigures(RULE_STRUCTURE)

/** 画像を置いてある場所 */
const IMAGE_DIRECTORY = join(process.cwd(), 'static/images/rules')

/**
 * その鍵で何かが出るか。文字で持ち直した表・図か、置いてある画像のどちらか
 * @param figure - 図や表の鍵
 * @returns 画面に何か出るなら true
 */
const isResolvable = (figure: string): boolean => {
  const source = `/images/rules/${figure}.png`
  return (
    findRuleTable(source) !== undefined ||
    findRuleTree(source) !== undefined ||
    findRuleSeating(source) !== undefined ||
    findRuleShapeFigure(source) !== undefined ||
    existsSync(join(IMAGE_DIRECTORY, `${figure}.png`))
  )
}

describe('条文につないだ図と表', () => {
  describe('正常系', () => {
    it('すべての鍵が、文字で持ち直した表・図か、置いてある画像に行き着くこと', () => {
      // #region Given
      const missing = figures.filter((figure) => !isResolvable(figure))
      // #endregion

      // #region Then
      expect(missing).toEqual([])
      // #endregion
    })
  })
})
