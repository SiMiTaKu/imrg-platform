import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Heading from '../../../src/lib/Heading/Heading.svelte'

describe('Heading', () => {
  describe('正常系', () => {
    it('見出しと補助の文言を渡した場合、両方を含む h2 になること', () => {
      // #region Given
      const props = { title: '大会・イベントカレンダー', subtitle: 'Event Calendar' }
      // #endregion

      // #region When
      render(Heading, props)
      // #endregion

      // #region Then
      const heading = screen.getByRole('heading', { level: 2, name: /大会・イベントカレンダー/ })
      expect(heading).toHaveTextContent('Event Calendar')
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
      render(Heading, { title: '見出し', subtitle: 'Heading', size })
      // #endregion

      // #region Then
      expect(screen.getByRole('heading', { level: 2 })).toHaveClass(className)
      // #endregion
    })
  })
})
