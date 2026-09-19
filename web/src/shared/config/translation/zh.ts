import { ALL_PAGES } from './allPages'

/**
 * 中国語に訳し終えたページのパス（言語の接頭辞なし、末尾スラッシュ付き）。
 *
 * @remarks
 * 言語ごとにファイルを分けているのは、言語の作業を並行して進めても同じ行を取り合わないようにするため
 */
export const ZH_TRANSLATED_PATHS: readonly string[] = ALL_PAGES
