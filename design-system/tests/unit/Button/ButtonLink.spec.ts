import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import ButtonLink from '../../../src/lib/Button/ui/ButtonLink.svelte'

describe('ButtonLink', () => {
  describe('正常系', () => {
    it.each([
      ['同じタブで開く場合、rel が空になること', '_self', ''],
      [
        '新しいタブで開く場合、rel に noopener noreferrer が付くこと',
        '_blank',
        'noopener noreferrer',
      ],
    ] as const)('%s', (_, target, rel) => {
      // #region Given
      // target は Svelte の設定と名前が重なるので、props にまとめて渡す
      const props = {
        text: '開く',
        href: '/calendar/',
        target,
        width: 400,
        height: 56,
        fontSize: 24,
      }
      // #endregion

      // #region When
      render(ButtonLink, { props })
      // #endregion

      // #region Then
      const link = screen.getByRole('link', { name: '開く' })
      expect(link).toHaveAttribute('href', '/calendar/')
      expect(link).toHaveAttribute('target', target)
      expect(link).toHaveAttribute('rel', rel)
      // #endregion
    })

    it('大きさを渡した場合、幅・高さ・文字の大きさがその値になること', () => {
      // #region Given
      const props = {
        text: '開く',
        href: '/',
        target: '_self',
        width: 320,
        height: 56,
        fontSize: 20,
      } as const
      // #endregion

      // #region When
      render(ButtonLink, { props })
      // #endregion

      // #region Then
      expect(screen.getByRole('link', { name: '開く' })).toHaveStyle({
        width: '320px',
        height: '56px',
        fontSize: '20px',
      })
      // #endregion
    })
  })
})
