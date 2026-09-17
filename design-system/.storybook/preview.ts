import type { Preview } from '@storybook/svelte-vite'

const preview: Preview = {
  parameters: {
    // a11y アドオンの結果で、違反があれば失敗として扱う
    a11y: { test: 'error' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
