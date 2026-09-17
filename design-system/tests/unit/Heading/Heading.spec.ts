import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Heading from '../../../src/lib/Heading/Heading.svelte'

describe('Heading', () => {
  describe('正常系', () => {
    it('見出しと補助の文言を渡した場合、両方を含む h2 になること', () => {
      // #region Given / When
      render(Heading, { title: '大会・イベントカレンダー', subtitle: 'Event Calendar' })
      // #endregion

      // #region Then
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('大会・イベントカレンダー')
      expect(heading).toHaveTextContent('Event Calendar')
      // #endregion
    })
  })
})
