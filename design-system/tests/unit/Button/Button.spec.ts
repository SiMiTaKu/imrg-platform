import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import Button from '../../../src/lib/Button/Button.svelte'

describe('Button', () => {
  describe('正常系', () => {
    it('押した場合、onclick が呼ばれること', async () => {
      // #region Given
      const onclick = vi.fn()
      render(Button, { text: 'もっと見る', width: 340, height: 56, onclick })
      // #endregion

      // #region When
      await fireEvent.click(screen.getByRole('button', { name: 'もっと見る' }))
      // #endregion

      // #region Then
      expect(onclick).toHaveBeenCalledOnce()
      // #endregion
    })

    it.each([
      ['大きさを省いた場合、large の見た目になること', undefined, 'large'],
      ['medium を指定した場合、medium の見た目になること', 'medium', 'medium'],
    ] as const)('%s', (_, size, className) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      render(Button, { text: 'もっと見る', width: 280, height: 56, size })
      // #endregion

      // #region Then
      const button = screen.getByRole('button', { name: 'もっと見る' })
      expect(button).toHaveClass(className)
      expect(button).toHaveStyle({ width: '280px', height: '56px' })
      // #endregion
    })
  })
})
