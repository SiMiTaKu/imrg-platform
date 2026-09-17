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

    it('今のページの場合、aria-current が page になること', () => {
      render(Pagination, { page: 5, totalPages: 10, onchange: vi.fn(), ...LABELS })
      expect(screen.getByRole('button', { name: '5' })).toHaveAttribute('aria-current', 'page')
    })

    it('補助の文言を渡した場合、その言語で表示されること', () => {
      render(Pagination, { page: 5, totalPages: 10, onchange: vi.fn(), ...LABELS })
      expect(screen.getByText('Prev')).toHaveAttribute('lang', 'en')
    })
  })

  describe('境界値', () => {
    it.each([
      ['先頭のページの場合、前へが押せないこと', 1, /前へ/],
      ['末尾のページの場合、次へが押せないこと', 10, /次へ/],
    ])('%s', (_, page, name) => {
      render(Pagination, { page, totalPages: 10, onchange: vi.fn(), ...LABELS })
      expect(screen.getByRole('button', { name })).toBeDisabled()
    })
  })
})
