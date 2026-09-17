import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

// vite.config.ts の設定（SvelteKit の $lib などの別名）を引き継ぐ
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'node',
      include: ['src/**/*.spec.ts'],
    },
  }),
)
