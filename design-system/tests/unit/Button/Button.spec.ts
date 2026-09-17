import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import Button from '../../../src/lib/Button/Button.svelte'

describe('Button', () => {
  describe('正常系', () => {
    it('押した場合、onclick が呼ばれること', async () => {
      // #region Given
      const onclick = vi.fn()
      render(Button, { text: 'もっと見る', width: 340, height: 56, fontSize: 24, onclick })
      // #endregion

      // #region When
      await fireEvent.click(screen.getByRole('button', { name: 'もっと見る' }))
      // #endregion

      // #region Then
      expect(onclick).toHaveBeenCalledOnce()
      // #endregion
    })

    it('大きさを渡した場合、幅・高さ・文字の大きさがその値になること', () => {
      // #region Given
      const props = { text: 'もっと見る', width: 280, height: 56, fontSize: 20, onclick: vi.fn() }
      // #endregion

      // #region When
      render(Button, props)
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: 'もっと見る' })).toHaveStyle({
        width: '280px',
        height: '56px',
        fontSize: '20px',
      })
      // #endregion
    })
  })
})
