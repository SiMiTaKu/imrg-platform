import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Heading from './Heading.svelte'

const meta = {
  title: 'Design System/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: { title: '大会・イベントカレンダー', subtitle: 'Event Calendar', size: 'large' },
  argTypes: {
    size: { control: 'inline-radio', options: ['large', 'medium'] },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const 大: Story = {}

export const 中: Story = {
  args: { size: 'medium' },
}
