import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import ButtonLink from '../../../src/lib/ButtonLink/ButtonLink.svelte'

describe('ButtonLink', () => {
  describe('正常系', () => {
    it.each([
      ['同じタブで開く場合、rel が空になること', '_self', ''],
      ['新しいタブで開く場合、noopener noreferrer が付くこと', '_blank', 'noopener noreferrer'],
    ] as const)('%s', (_, target, rel) => {
      // #region Given / When
      // target は Svelte の設定と名前が重なるので、props にまとめて渡す
      render(ButtonLink, {
        props: { text: '開く', href: '/calendar/', width: 400, height: 56, target },
      })
      // #endregion

      // #region Then
      const link = screen.getByRole('link', { name: '開く' })
      expect(link).toHaveAttribute('href', '/calendar/')
      expect(link).toHaveAttribute('target', target)
      expect(link).toHaveAttribute('rel', rel)
      // #endregion
    })
  })
})
