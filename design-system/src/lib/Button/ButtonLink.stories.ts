import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ButtonLink from './ui/ButtonLink.svelte'

const meta = {
  title: 'Design System/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  args: {
    text: '大会カレンダーを見る',
    href: '/calendar/',
    target: '_self',
    width: 400,
    height: 56,
    fontSize: 24,
  },
  argTypes: {
    target: { control: 'inline-radio', options: ['_self', '_blank'] },
  },
} satisfies Meta<typeof ButtonLink>

export default meta

type Story = StoryObj<typeof meta>

export const 標準: Story = {}

export const 小さめ: Story = {
  args: { width: 320, fontSize: 20 },
}

export const 新しいタブで開く: Story = {
  args: { text: 'YouTube チャンネル', href: 'https://www.youtube.com/', target: '_blank' },
}
