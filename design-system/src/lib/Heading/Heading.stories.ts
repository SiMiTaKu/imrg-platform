import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Heading from './Heading.svelte'

const meta = {
  title: 'Design System/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    title: '大会・イベントカレンダー',
    subtitle: 'Event Calendar',
    fontSize: 40,
    subtitleFontSize: 20,
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: '標準' }

export const Small: Story = {
  name: '小さめ',
  args: { fontSize: 30, subtitleFontSize: 16 },
}

export const WithoutLead: Story = {
  name: '補助の文言なし',
  args: { subtitle: undefined },
}
