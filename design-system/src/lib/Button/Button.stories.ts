import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Button from './Button.svelte'

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  args: { text: 'もっと見る', width: 340, height: 56, size: 'large' },
  argTypes: {
    size: { control: 'inline-radio', options: ['large', 'medium'] },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const 大: Story = {}

export const 中: Story = {
  args: { width: 280, size: 'medium' },
}
