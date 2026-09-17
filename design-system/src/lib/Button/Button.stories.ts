import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Button from './Button.svelte'

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  args: { text: 'もっと見る', width: 340, height: 56, isMobile: false },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const PC: Story = {}

export const スマホ: Story = {
  args: { width: 280, isMobile: true },
}
