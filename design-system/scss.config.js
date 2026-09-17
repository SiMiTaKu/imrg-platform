import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

/** トークン（色・余白・フォント・影・角丸）の置き場所 */
export const STYLES_DIR = resolve(currentDir, 'src/styles')

/**
 * 全コンポーネントで読み込む SCSS の設定。デザインシステムと web の両方で使う
 */
export const SCSS_OPTIONS = {
  loadPaths: [STYLES_DIR],
  additionalData: ['@use "index" as *;', '@use "sass:map";', '@use "sass:math";'].join('\n'),
}
