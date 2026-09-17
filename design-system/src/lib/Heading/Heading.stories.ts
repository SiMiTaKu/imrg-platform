import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Heading from './Heading.svelte'

const meta = {
  title: 'Design System/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: { title: '大会・イベントカレンダー', subtitle: 'Event Calendar', isMobile: false },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const PC: Story = {}

export const スマホ: Story = {
  args: { isMobile: true },
}
