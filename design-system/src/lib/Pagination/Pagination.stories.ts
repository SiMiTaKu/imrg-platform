import type { Meta, StoryObj } from '@storybook/svelte-vite'
import { fn } from 'storybook/test'
import Pagination from './Pagination.svelte'

const meta = {
  title: 'Design System/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    page: 5,
    totalPages: 12,
    onchange: fn(),
    labels: {
      navigation: 'ページ送り',
      first: '最初のページ',
      prev: '前のページ',
      next: '次のページ',
      last: '最後のページ',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const 途中のページ: Story = {}

export const 先頭のページ: Story = {
  args: { page: 1 },
}

export const 末尾のページ: Story = {
  args: { page: 12 },
}
