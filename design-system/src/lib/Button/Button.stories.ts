import type { Meta, StoryObj } from '@storybook/svelte-vite'
import { fn } from 'storybook/test'
import Button from './Button.svelte'

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  args: { text: 'もっと見る', width: 340, height: 56, fontSize: 24, onclick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const 標準: Story = {}

export const 小さめ: Story = {
  args: { width: 280, fontSize: 20 },
}
