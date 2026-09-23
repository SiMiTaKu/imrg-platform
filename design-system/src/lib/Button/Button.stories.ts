import type { Meta, StoryObj } from '@storybook/svelte-vite'
import { createRawSnippet } from 'svelte'
import { fn } from 'storybook/test'
import Button from './ui/Button.svelte'

/**
 * ボタンに出す文言の snippet を作る
 * @param text - 出す文言
 * @returns ボタンの中身の snippet
 */
const labelOf = (text: string) => createRawSnippet(() => ({ render: () => `<span>${text}</span>` }))

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'sky-blue',
    size: 'medium',
    width: 'auto',
    onclick: fn(),
    children: labelOf('もっと見る'),
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['sky-blue', 'sky-blue-outline', 'yellow'],
    },
    size: { control: 'inline-radio', options: ['medium', 'large'] },
    width: { control: 'inline-radio', options: ['auto', 'full', 240] },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/** 空色の塗り。そのページでいちばん進んでほしい先に使う */
export const 塗り: Story = {}

/** 空色の白抜き。押す先が主役ではないときや、中身の上に置くときに使う */
export const 白抜き: Story = {
  args: { variant: 'sky-blue-outline' },
}

/** 黄。相談への一歩に使う。黄は明るいので文字は黒にする（色の決まり 4） */
export const 黄: Story = {
  args: { variant: 'yellow', children: labelOf('DM で相談する') },
}

/** 大きいほう。最小の高さ 56px・文字 18px */
export const 大きい: Story = {
  args: { size: 'large', children: labelOf('大会カレンダーを見る') },
}

/** 横いっぱい。スマホで1つずつ縦に積むときに使う */
export const 横いっぱい: Story = {
  args: { width: 'full' },
}

/** 数値を渡すと、その px を最大幅にする。狭い画面では画面に収まるところまで縮む */
export const 最大幅を決める: Story = {
  args: { width: 240 },
}

// 話の引数が押しボタンではなくリンクの形になるので、meta ではなく部品の型で受ける
/** href を渡すとリンクになる。新しいタブで開くときは rel が付く */
export const リンク: StoryObj<typeof Button> = {
  args: {
    variant: 'sky-blue',
    size: 'medium',
    width: 'auto',
    href: 'https://www.youtube.com/',
    target: '_blank',
    children: labelOf('YouTube チャンネル'),
  },
}
