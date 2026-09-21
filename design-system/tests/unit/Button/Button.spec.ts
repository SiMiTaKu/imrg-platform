import { fireEvent, render, screen } from '@testing-library/svelte'
import { createRawSnippet } from 'svelte'
import { describe, expect, it, vi } from 'vitest'
import Button from '../../../src/lib/Button/ui/Button.svelte'

/**
 * ボタンに出す文言の snippet を作る
 * @param text - 出す文言
 * @returns ボタンの中身の snippet
 */
const labelOf = (text: string) => createRawSnippet(() => ({ render: () => `<span>${text}</span>` }))

describe('Button', () => {
  // #region 押しボタン
  describe('正常系（押しボタン）', () => {
    it('href を渡さない場合、押しボタンになり onclick が呼ばれること', async () => {
      // #region Given
      const onclick = vi.fn()
      render(Button, { props: { width: 'auto', onclick, children: labelOf('もっと見る') } })
      // #endregion

      // #region When
      await fireEvent.click(screen.getByRole('button', { name: 'もっと見る' }))
      // #endregion

      // #region Then
      expect(onclick).toHaveBeenCalledOnce()
      // #endregion
    })

    it('押しボタンの場合、type が button になり送信に使われないこと', () => {
      // #region Given
      const props = { width: 'auto', onclick: vi.fn(), children: labelOf('閉じる') } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: '閉じる' })).toHaveAttribute('type', 'button')
      // #endregion
    })
  })
  // #endregion

  // #region リンク
  describe('正常系（リンク）', () => {
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
        href: '/calendar/',
        target,
        width: 'auto',
        children: labelOf('開く'),
      } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      const link = screen.getByRole('link', { name: '開く' })
      expect(link).toHaveAttribute('href', '/calendar/')
      expect(link).toHaveAttribute('target', target)
      expect(link).toHaveAttribute('rel', rel)
      // #endregion
    })
  })
  // #endregion

  // #region 見た目
  describe('正常系（見た目）', () => {
    it('見た目と大きさを省いた場合、塗り・medium になること', () => {
      // #region Given
      const props = { width: 'auto', onclick: vi.fn(), children: labelOf('もっと見る') } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      const button = screen.getByRole('button', { name: 'もっと見る' })
      expect(button).toHaveClass('fill')
      expect(button).not.toHaveClass('large')
      // #endregion
    })

    it.each([
      ['塗りを選んだ場合、fill が付くこと', 'fill'],
      ['白抜きを選んだ場合、outline が付くこと', 'outline'],
      ['黄を選んだ場合、yellow が付くこと', 'yellow'],
    ] as const)('%s', (_, variant) => {
      // #region Given
      const props = {
        variant,
        width: 'auto',
        onclick: vi.fn(),
        children: labelOf('もっと見る'),
      } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: 'もっと見る' })).toHaveClass(variant)
      // #endregion
    })

    it('large を選んだ場合、large が付くこと', () => {
      // #region Given
      const props = {
        size: 'large',
        width: 'auto',
        onclick: vi.fn(),
        children: labelOf('もっと見る'),
      } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: 'もっと見る' })).toHaveClass('large')
      // #endregion
    })

    it('読み上げ用の名前を渡した場合、その名前で見つかること', () => {
      // #region Given
      const props = {
        label: '第1章をすべて開く',
        width: 'auto',
        onclick: vi.fn(),
        children: labelOf('すべて開く'),
      } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: '第1章をすべて開く' })).toBeInTheDocument()
      // #endregion
    })

    it('auto を渡した場合、横に広げず文字に合わせた幅になること', () => {
      // #region Given
      const props = { width: 'auto', onclick: vi.fn(), children: labelOf('もっと見る') } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      const button = screen.getByRole('button', { name: 'もっと見る' })
      expect(button).not.toHaveClass('stretch')
      expect(button.style.getPropertyValue('--button-max-width')).toBe('')
      // #endregion
    })

    it('full を渡した場合、横いっぱいに広がり最大幅を決めないこと', () => {
      // #region Given
      const props = { width: 'full', onclick: vi.fn(), children: labelOf('もっと見る') } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      const button = screen.getByRole('button', { name: 'もっと見る' })
      expect(button).toHaveClass('stretch')
      expect(button.style.getPropertyValue('--button-max-width')).toBe('')
      // #endregion
    })

    it('数値を渡した場合、決め打ちの幅ではなく px の最大幅になること', () => {
      // #region Given
      const props = { width: 240, onclick: vi.fn(), children: labelOf('もっと見る') } as const
      // #endregion

      // #region When
      render(Button, { props })
      // #endregion

      // #region Then
      const button = screen.getByRole('button', { name: 'もっと見る' })
      expect(button).toHaveClass('stretch')
      expect(button.style.getPropertyValue('--button-max-width')).toBe('240px')
      // #endregion
    })
  })
  // #endregion
})
