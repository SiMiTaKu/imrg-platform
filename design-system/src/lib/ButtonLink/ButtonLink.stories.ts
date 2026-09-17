import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ButtonLink from './ButtonLink.svelte'

const meta = {
  title: 'Design System/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  args: { text: '大会カレンダーを見る', href: '/calendar/', width: 400, height: 56 },
  argTypes: {
    target: { control: 'inline-radio', options: ['_self', '_blank'] },
    size: { control: 'inline-radio', options: ['large', 'medium'] },
  },
} satisfies Meta<typeof ButtonLink>

export default meta

type Story = StoryObj<typeof meta>

export const 大: Story = {}

export const 中: Story = {
  args: { width: 320, size: 'medium' },
}

export const 新しいタブで開く: Story = {
  args: { text: 'YouTube チャンネル', href: 'https://www.youtube.com/', target: '_blank' },
}
