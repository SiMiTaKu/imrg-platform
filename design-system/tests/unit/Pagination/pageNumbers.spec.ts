import { describe, expect, it } from 'vitest'
import { pageNumbers } from '../../../src/lib/Pagination/lib/pageNumbers'

describe('pageNumbers', () => {
  describe('正常系', () => {
    it.each([
      ['全部で1ページの場合、1だけになること', 1, 1, [1]],
      ['先頭のページの場合、次のページと末尾が出ること', 1, 10, [1, 2, '…', 10]],
      ['途中のページの場合、前後と先頭・末尾が出ること', 5, 10, [1, '…', 4, 5, 6, '…', 10]],
      ['末尾のページの場合、前のページと先頭が出ること', 10, 10, [1, '…', 9, 10]],
    ] as const)('%s', (_, current, total, expected) => {
      expect(pageNumbers(current, total)).toEqual(expected)
    })
  })

  describe('境界値', () => {
    it('1ページだけ飛ぶ場合、「…」ではなく番号が出ること', () => {
      expect(pageNumbers(4, 10)).toEqual([1, 2, 3, 4, 5, '…', 10])
    })
  })
})
