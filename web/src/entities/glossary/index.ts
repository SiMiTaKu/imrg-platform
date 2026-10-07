// 男子新体操の用語集。ルールの外の言葉も入れる。
// 辞書のように、読みのあいうえお順に並べて五十音の行で分ける。
// 語ごとの URL の名前（slug）は一度決めたら変えない
export {
  GLOSSARY_GYOU_HEADS,
  GLOSSARY_OTHER_HEAD,
  glossaryGyouOf,
  groupGlossaryByGyou,
  matchesGlossaryTerm,
  toHiragana,
} from './model'
export type { GlossaryGyou, GlossaryTerm } from './model'
export { GLOSSARY_JA } from './api/ja'
