import type { Meta, StoryObj } from '@storybook/svelte-vite'
import { createRawSnippet } from 'svelte'
import { fn } from 'storybook/test'
import Modal from './ui/Modal.svelte'

/**
 * 説明の文を並べた中身。話ごとに長さを変えて、はみ出し方を見る
 * @param lines - 並べる文の数
 * @returns モーダルの中身の snippet
 */
const bodyOf = (lines: number) =>
  createRawSnippet(() => ({
    render: () =>
      `<div>${Array.from(
        { length: lines },
        (_, index) =>
          `<p>${index + 1}行目。モーダルの中身はこの場所に入る。長くなるとここだけが動き、見出しと右上のばつは動かない。</p>`,
      ).join('')}</div>`,
  }))

const meta = {
  title: 'Design System/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: '過去の作品',
    titleVariant: 'plain',
    width: 720,
    onclose: fn(),
    labels: { close: '閉じる' },
    children: bodyOf(3),
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: '基本' }

export const TintedTitle: Story = {
  name: '見出しを色の帯にする',
  args: { title: '決定点', titleVariant: 'tinted', titleBackground: '#0065a4' },
}

export const LongBody: Story = {
  name: '中身が長い',
  args: { children: bodyOf(40) },
}

export const Wide: Story = {
  name: '幅を広げる',
  args: { width: 1100 },
}
