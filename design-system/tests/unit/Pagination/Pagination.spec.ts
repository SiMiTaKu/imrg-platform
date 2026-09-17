import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import Pagination from '../../../src/lib/Pagination/Pagination.svelte'

const LABELS = {
  navigation: 'ページ送り',
  first: '最初のページ',
  prev: '前のページ',
  next: '次のページ',
  last: '最後のページ',
}

describe('Pagination', () => {
  describe('正常系', () => {
    it.each([
      ['番号を押した場合、そのページ番号で onchange が呼ばれること', '6', 6],
      ['最初のページを押した場合、1 で onchange が呼ばれること', '最初のページ', 1],
      ['前のページを押した場合、前のページ番号で onchange が呼ばれること', '前のページ', 4],
      ['次のページを押した場合、次のページ番号で onchange が呼ばれること', '次のページ', 6],
      ['最後のページを押した場合、全ページ数で onchange が呼ばれること', '最後のページ', 10],
    ])('%s', async (_, name, expected) => {
      // #region Given
      const onchange = vi.fn()
      render(Pagination, { page: 5, totalPages: 10, onchange, labels: LABELS })
      // #endregion

      // #region When
      await fireEvent.click(screen.getByRole('button', { name }))
      // #endregion

      // #region Then
      expect(onchange).toHaveBeenCalledWith(expected)
      // #endregion
    })

    it('今のページの場合、aria-current が page になること', () => {
      // #region Given
      const props = { page: 5, totalPages: 10, onchange: vi.fn(), labels: LABELS }
      // #endregion

      // #region When
      render(Pagination, props)
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: '5' })).toHaveAttribute('aria-current', 'page')
      expect(screen.getByRole('button', { name: '6' })).not.toHaveAttribute('aria-current')
      // #endregion
    })

    it('読み上げ用の名前を渡した場合、ページ送り全体の名前になること', () => {
      // #region Given
      const props = { page: 5, totalPages: 10, onchange: vi.fn(), labels: LABELS }
      // #endregion

      // #region When
      render(Pagination, props)
      // #endregion

      // #region Then
      expect(screen.getByRole('navigation', { name: 'ページ送り' })).toBeInTheDocument()
      // #endregion
    })
  })

  describe('境界値', () => {
    it.each([
      [
        '先頭のページの場合、最初と前のページが押せないこと',
        1,
        ['最初のページ', '前のページ'],
        ['次のページ', '最後のページ'],
      ],
      [
        '末尾のページの場合、次と最後のページが押せないこと',
        10,
        ['次のページ', '最後のページ'],
        ['最初のページ', '前のページ'],
      ],
    ])('%s', (_, page, disabledNames, enabledNames) => {
      // #region Given
      const props = { page, totalPages: 10, onchange: vi.fn(), labels: LABELS }
      // #endregion

      // #region When
      render(Pagination, props)
      // #endregion

      // #region Then
      for (const name of disabledNames) {
        expect(screen.getByRole('button', { name })).toBeDisabled()
      }
      for (const name of enabledNames) {
        expect(screen.getByRole('button', { name })).toBeEnabled()
      }
      // #endregion
    })
  })
})
