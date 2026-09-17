import type { StorybookConfig } from '@storybook/svelte-vite'
import { mergeConfig } from 'vite'
import { SCSS_OPTIONS } from '../scss.config.js'

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|svelte)'],
  viteFinal(viteConfig) {
    // トークンを全コンポーネントで読み込む（デザインシステムの vite.config.ts と同じ設定）
    return mergeConfig(viteConfig, {
      css: { preprocessorOptions: { scss: SCSS_OPTIONS } },
    })
  },
}

export default config
