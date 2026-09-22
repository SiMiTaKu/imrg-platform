import { fireEvent, render, screen } from '@testing-library/svelte'
import { createRawSnippet } from 'svelte'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Modal from '../../../src/lib/Modal/ui/Modal.svelte'

const LABELS = { close: '閉じる' }

const CHILDREN = createRawSnippet(() => ({
  render: () => '<p>モーダルの中身</p>',
}))

/**
 * 既定の引数でモーダルを出す
 * @param props - 上書きしたい引数
 * @returns render の戻り値と onclose
 */
const renderModal = (props: Record<string, unknown> = {}) => {
  const onclose = vi.fn()
  const result = render(Modal, {
    title: '過去の作品',
    titleVariant: 'plain',
    width: 720,
    onclose,
    labels: LABELS,
    children: CHILDREN,
    ...props,
  })
  return { ...result, onclose }
}

afterEach(() => {
  document.body.style.overflow = ''
})

describe('Modal', () => {
  describe('正常系', () => {
    it('開いた場合、見出しでモーダルの名前が引けること', () => {
      // #region Given / When
      renderModal()
      // #endregion

      // #region Then
      expect(screen.getByRole('dialog', { name: '過去の作品' })).toBeInTheDocument()
      // #endregion
    })

    it('開いた場合、閉じるボタンが右上のばつになっていること', () => {
      // #region Given / When
      renderModal()
      // #endregion

      // #region Then
      const close = screen.getByRole('button', { name: '閉じる' })
      expect(close.querySelector('svg')).toBeInTheDocument()
      expect(close).not.toHaveTextContent('閉じる')
      // #endregion
    })

    it('開いた場合、中へ焦点が移ること', () => {
      // #region Given / When
      renderModal()
      // #endregion

      // #region Then
      expect(screen.getByRole('button', { name: '閉じる' })).toHaveFocus()
      // #endregion
    })

    it('開いている場合、後ろの画面が動かないこと', () => {
      // #region Given / When
      renderModal()
      // #endregion

      // #region Then
      expect(document.body.style.overflow).toBe('hidden')
      // #endregion
    })

    it('ばつを押した場合、onclose が呼ばれること', async () => {
      // #region Given
      const { onclose } = renderModal()
      // #endregion

      // #region When
      await fireEvent.click(screen.getByRole('button', { name: '閉じる' }))
      // #endregion

      // #region Then
      expect(onclose).toHaveBeenCalledTimes(1)
      // #endregion
    })

    it('背景を押した場合、onclose が呼ばれること', async () => {
      // #region Given
      const { onclose } = renderModal()
      const dialog = screen.getByRole('dialog')
      // #endregion

      // #region When
      await fireEvent.pointerDown(dialog)
      await fireEvent.click(dialog)
      // #endregion

      // #region Then
      expect(onclose).toHaveBeenCalledTimes(1)
      // #endregion
    })

    it('閉じた場合、後ろの画面がまた動くようになること', () => {
      // #region Given
      const { unmount } = renderModal()
      // #endregion

      // #region When
      unmount()
      // #endregion

      // #region Then
      expect(document.body.style.overflow).toBe('')
      // #endregion
    })

    it('閉じた場合、開く前に触っていた場所へ焦点が戻ること', () => {
      // #region Given
      const opener = document.createElement('button')
      document.body.append(opener)
      opener.focus()
      const { unmount } = renderModal()
      // #endregion

      // #region When
      unmount()
      // #endregion

      // #region Then
      expect(opener).toHaveFocus()
      opener.remove()
      // #endregion
    })

    it('見出しを隠した場合でも、モーダルの名前は引けること', () => {
      // #region Given / When
      renderModal({ title: '作品の写真', titleVariant: 'hidden' })
      // #endregion

      // #region Then
      expect(screen.getByRole('dialog', { name: '作品の写真' })).toBeInTheDocument()
      // #endregion
    })

    it('中身の上で押し始めて背景で離した場合、閉じないこと', async () => {
      // #region Given
      const { onclose } = renderModal()
      const dialog = screen.getByRole('dialog')
      // #endregion

      // #region When
      await fireEvent.pointerDown(screen.getByText('モーダルの中身'))
      await fireEvent.click(dialog)
      // #endregion

      // #region Then
      expect(onclose).not.toHaveBeenCalled()
      // #endregion
    })
  })
})
