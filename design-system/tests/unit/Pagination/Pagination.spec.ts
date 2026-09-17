import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import Pagination from '../../../src/lib/Pagination/Pagination.svelte'

const LABELS = {
  ariaLabel: 'ページ',
  prevLabel: { text: '前へ', secondary: 'Prev', secondaryLang: 'en' },
  nextLabel: { text: '次へ' },
}

describe('Pagination', () => {
  describe('正常系', () => {
    it('番号を押した場合、そのページ番号で onchange が呼ばれること', async () => {
      // #region Given
      const onchange = vi.fn()
      render(Pagination, { page: 5, totalPages: 10, onchange, ...LABELS })
      // #endregion

      // #region When
      await fireEvent.click(screen.getByRole('button', { name: '6' }))
      // #endregion

      // #region Then
      expect(onchange).toHaveBeenCalledWith(6)
      // #endregion
    })

    it.each([
      ['前へを押した場合、前のページ番号で onchange が呼ばれること', /前へ/, 4],
      ['次へを押した場合、次のページ番号で onchange が呼ばれること', /次へ/, 6],
    ])('%s', async (_, name, expected) => {
      // #region Given
      const onchange = vi.fn()
      render(Pagination, { page: 5, totalPages: 10, onchange, ...LABELS })
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
      const props = { page: 5, totalPages: 10, onchange: vi.fn(), ...LABELS }
      // #endregion

      // #region When
      render(Pagination, props)
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: '5' })).toHaveAttribute('aria-current', 'page')
      expect(screen.getByRole('button', { name: '6' })).not.toHaveAttribute('aria-current')
      // #endregion
    })

    it('補助の文言を渡した場合、指定した言語で表示されること', () => {
      // #region Given
      const props = { page: 5, totalPages: 10, onchange: vi.fn(), ...LABELS }
      // #endregion

      // #region When
      render(Pagination, props)
      // #endregion

      // #region Then
      const prev = screen.getByRole('button', { name: /前へ/ })
      expect(prev.querySelector('[lang="en"]')).toHaveTextContent('Prev')
      // #endregion
    })
  })

  describe('境界値', () => {
    it.each([
      ['先頭のページの場合、前へが押せないこと', 1, /前へ/],
      ['末尾のページの場合、次へが押せないこと', 10, /次へ/],
    ])('%s', (_, page, name) => {
      // #region Given
      const props = { page, totalPages: 10, onchange: vi.fn(), ...LABELS }
      // #endregion

      // #region When
      render(Pagination, props)
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name })).toBeDisabled()
      // #endregion
    })
  })
})
