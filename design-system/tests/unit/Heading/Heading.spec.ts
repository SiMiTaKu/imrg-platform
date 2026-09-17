import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Heading from '../../../src/lib/Heading/Heading.svelte'

describe('Heading', () => {
  describe('正常系', () => {
    it('見出しと補助の文言を渡した場合、両方を含む h2 になること', () => {
      // #region Given
      const props = {
        title: '大会・イベントカレンダー',
        subtitle: 'Event Calendar',
        fontSize: 40,
        subtitleFontSize: 20,
      }
      // #endregion

      // #region When
      render(Heading, props)
      // #endregion

      // #region Then
      const heading = screen.getByRole('heading', { level: 2, name: /大会・イベントカレンダー/ })
      expect(heading).toHaveTextContent('Event Calendar')
      // #endregion
    })

    it('文字の大きさを渡した場合、見出しと補助の文言の大きさに使われること', () => {
      // #region Given
      const props = { title: '見出し', subtitle: 'Heading', fontSize: 30, subtitleFontSize: 16 }
      // #endregion

      // #region When
      render(Heading, props)
      // #endregion

      // #region Then
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading.style.getPropertyValue('--title-font-size')).toBe('30px')
      expect(heading.style.getPropertyValue('--subtitle-font-size')).toBe('16px')
      // #endregion
    })
  })
})
