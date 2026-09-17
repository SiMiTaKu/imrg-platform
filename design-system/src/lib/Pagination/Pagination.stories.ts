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
    ariaLabel: 'ページ / Pages',
    prevLabel: { text: '前へ', secondary: 'Prev', secondaryLang: 'en' },
    nextLabel: { text: '次へ', secondary: 'Next', secondaryLang: 'en' },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const 途中のページ: Story = {}

export const 先頭のページ: Story = {
  args: { page: 1 },
}

export const 補助の文言なし: Story = {
  args: {
    ariaLabel: 'Pages',
    prevLabel: { text: 'Prev' },
    nextLabel: { text: 'Next' },
  },
}
